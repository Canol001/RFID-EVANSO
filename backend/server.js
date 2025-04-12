const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./attendance.db', (err) => {
  if (err) console.error('Database error:', err);
  console.log('Connected to SQLite');
});

app.get('/api/dashboard', (req, res) => {
    const selectedDate = req.query.date || new Date().toISOString().split('T')[0]; // use ?date=YYYY-MM-DD or today
  
    db.get('SELECT COUNT(*) AS total FROM Students', (err, totalRow) => {
      if (err) return res.status(500).json({ error: err.message });
  
      db.get(
        `SELECT COUNT(*) AS present FROM Attendance WHERE status='Present' AND DATE(scan_time)=?`,
        [selectedDate],
        (err, presentRow) => {
          if (err) return res.status(500).json({ error: err.message });
  
          db.all(
            `SELECT status, COUNT(*) AS count FROM Attendance WHERE DATE(scan_time)=? GROUP BY status`,
            [selectedDate],
            (err, chartRows) => {
              if (err) return res.status(500).json({ error: err.message });
  
              const chartData = {
                Present: 0,
                Absent: 0,
              };
  
              chartRows.forEach(row => {
                chartData[row.status] = row.count;
              });
  
              res.json({
                total: totalRow.total,
                present: presentRow.present,
                absent: totalRow.total - presentRow.present,
                chart: chartData,
              });
            }
          );
        }
      );
    });
  });
  


// Get Attendance Records
app.get('/api/attendance', (req, res) => {
    const query = `
      SELECT 
        s.name AS name,
        s.rfid_tag AS rfid_tag,
        a.scan_time AS scan_time,
        a.status AS status
      FROM Attendance a
      LEFT JOIN Students s ON a.student_id = s.student_id
      ORDER BY a.scan_time DESC
    `;
  
    db.all(query, [], (err, rows) => {
      if (err) {
        console.error('Error fetching attendance:', err);
        return res.status(500).json({ error: err.message });
      }
      res.json(rows);
    });
  });
  
  

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  