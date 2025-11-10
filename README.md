# Movie Explorer 🎬🍿

A full-stack web application to explore movies, view details, and manage your movie collection. Built with **Django REST Framework** for the backend and **React** for the frontend.

---

## 🧰 Tech Stack

**Backend:**
- Django 5.x
- Django REST Framework
- SQLite (for development)
- JWT Authentication (`djangorestframework-simplejwt`)
- CORS Headers (`django-cors-headers`)

**Frontend:**
- React 18+
- Axios for API calls
- Tailwind CSS (optional)
- React Hooks (`useState`, `useEffect`)

**Tools:**
- Git & GitHub
- VS Code / PyCharm
- Node.js & npm

---

## 🚀 Features

- **Movies Management:** Add, edit, delete, and view movie details.
- **Search & Filter:** Search movies by title, genre, or year.
- **Dashboard:** Overview of total movies and recent additions.
- **User Authentication:** Secure login/logout using JWT.
- **Responsive UI:** Works on desktop and mobile devices.

---

## 💻 Installation

### Backend (Django)

1. Clone the repository:

```bash
git clone https://github.com/banumariwan/Movie-Explorer.git
cd movie_backend
Create a virtual environment and activate it:

bash
Copy code
python -m venv .venv
.venv\Scripts\activate      # Windows
# source .venv/bin/activate  # macOS/Linux
Install dependencies:

bash
Copy code
pip install -r requirements.txt
Run migrations:

bash
Copy code
python manage.py migrate
Create a superuser (optional):

bash
Copy code
python manage.py createsuperuser
Start the backend server:

bash
Copy code
python manage.py runserver
Frontend (React)
Navigate to the frontend folder:

bash
Copy code
cd movie_frontend
Install npm packages:

bash
Copy code
npm install
Start the frontend server:

bash
Copy code
npm start
Frontend runs at http://localhost:3000 and communicates with Django backend at http://localhost:8000/api/

📂 Project Structure
bash
Copy code
movie_backend/       # Django backend
├─ core/             # Models, views, serializers
├─ movie_backend/    # Project settings
movie_frontend/      # React frontend
├─ src/pages/        # React pages (MovieList, MovieForm, Dashboard, etc.)
├─ src/services/     # Axios API services
requirements.txt
README.md
🔑 API Endpoints
Resource	Endpoint	Methods
Movies	/api/movies/	GET, POST, PUT, DELETE
Dashboard	/api/dashboard/	GET
Auth (JWT)	/api/token/	POST
Refresh JWT	/api/token/refresh/	POST

📝 Notes
Backend must be running before using the frontend.

.env can be used for secret keys, database settings, and API URLs.

Tailwind CSS is optional; you can remove it if you prefer plain CSS.

