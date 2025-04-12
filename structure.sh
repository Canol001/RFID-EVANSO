rfid-attendance-system/
├── /frontend/
│   ├── /public/
│   │   ├── favicon.ico
│   │   └── assets/
│   │       ├── logo.png
│   │       └── fonts/
│   │           └── Poppins-Regular.ttf
│   ├── /src/
│   │   ├── /components/
│   │   │   ├── Navbar.js
│   │   │   ├── SummaryCard.js
│   │   │   ├── PieChart.js
│   │   │   └── Button.js
│   │   ├── /pages/
│   │   │   ├── Dashboard.js
│   │   │   ├── Attendance.js
│   │   │   ├── Reports.js
│   │   │   └── AdminLogin.js
│   │   ├── /styles/
│   │   │   ├── style.css
│   │   │   └── tailwind.css (optional, if Tailwind is reintroduced)
│   │   ├── /utils/
│   │   │   ├── api.js
│   │   │   └── counter.js
│   │   ├── App.js
│   │   └── main.js
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── /backend/
│   ├── /controllers/
│   │   ├── dashboardController.js
│   │   ├── attendanceController.js
│   │   ├── reportsController.js
│   │   └── authController.js
│   ├── /routes/
│   │   ├── dashboard.js
│   │   ├── attendance.js
│   │   ├── reports.js
│   │   └── auth.js
│   ├── /models/
│   │   └── db.js
│   ├── /migrations/
│   │   ├── 001-create-students.sql
│   │   ├── 002-create-attendance.sql
│   │   └── 003-create-users.sql
│   ├── /data/
│   │   └── attendance.db
│   ├── server.js
│   ├── package.json
│   └── .env
├── /arduino/
│   ├── rfid_scan.ino
│   └── config.h
├── /docs/
│   ├── setup.md
│   ├── api.md
│   └── hardware.md
├── README.md
└── .gitignore