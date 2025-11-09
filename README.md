📽️ Movie Explorer & Booking Platform
🎬 Overview

Movie Explorer is a full-stack movie browsing and booking platform built with Django REST Framework and React.
Users can explore movies, view details, book tickets for screenings, and manage their bookings.
Admins have a dashboard with live statistics for total movies, screenings, and bookings.

🚀 Features

✅ JWT Authentication (login & secure booking)
✅ Browse & search movies by title or genre
✅ Detailed movie pages with booking forms
✅ Admin Dashboard for platform insights
✅ Responsive UI built with Tailwind CSS
✅ Fully connected REST API (Django ↔ React)

🧱 Tech Stack
Layer	Technology
Frontend	React, Axios, Tailwind CSS
Backend	Django, Django REST Framework, JWT (SimpleJWT)
Database	SQLite (dev) / PostgreSQL (prod)
Deployment	Render (backend), Vercel (frontend)
📦 Project Structure
movie_explorer/
│
├── movie_backend/
│   ├── core/
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── serializers.py
│   │   └── urls.py
│   ├── movie_backend/
│   │   ├── settings.py
│   │   └── urls.py
│   └── manage.py
│
└── movie_frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/api.js
    │   └── App.js
    ├── package.json
    └── tailwind.config.js

⚙️ Setup Instructions
1️⃣ Backend (Django)
cd movie_backend
python -m venv venv
venv\Scripts\activate   # macOS/Linux: source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver


By default, API runs at:
👉 http://127.0.0.1:8000/api/

2️⃣ Frontend (React)
cd movie_frontend
npm install
npm start


Frontend runs at:
👉 http://localhost:3000

🔑 Authentication (JWT)
Endpoint	Method	Description
/api/token/	POST	Obtain JWT token
/api/token/refresh/	POST	Refresh token

Login Body Example

{
  "username": "testuser",
  "password": "1234"
}

🧩 Main API Endpoints
Resource	Endpoint	Method	Auth	Description
Movies	/api/movies/	GET	❌	List/search movies
Movie Detail	/api/movies/:id/	GET	❌	Movie info
Bookings	/api/bookings/	GET/POST	✅	User bookings
Dashboard	/api/dashboard/	GET	✅	Admin statistics
🖥️ Screens
Screen	Description
Home	List & search movies
Movie Detail	View movie details & book seats
Login	Obtain JWT token
Admin Dashboard	Platform analytics cards
🧠 Admin Dashboard Metrics

Total movies

Total screenings

Total bookings

Upcoming screenings count

🌍 Deployment
Django Backend → Render

Push code to GitHub

Create new Render web service

Set start command:

gunicorn movie_backend.wsgi


Add environment variable:

ALLOWED_HOSTS = ['*']

React Frontend → Vercel

Connect GitHub repo

Set build command: npm run build

Update api.js base URL to your deployed backend

💡 Future Enhancements

✅ Add seat selection interface

✅ Add user signup page

✅ Payment gateway integration

✅ Dark mode toggle

👨‍💻 Author

Developed by: "Banu Mariwan"
💼 Role: Full-Stack Engineer / Cyber Security Enthusiast
📅 Year: 2025
