# 🚀 Reddit Clone - Full Stack Social Media Platform

A full-stack Reddit Clone built using Spring Boot, Spring Security, JWT Authentication, MySQL, Next.js, and Tailwind CSS.

Users can:

- 🔐 Register & Login
- 🏘️ Create Communities
- 📝 Create Posts
- 🖼️ Upload Images
- 👍 Upvote & 👎 Downvote
- 💬 Comment on Posts
- 🔍 Browse Feed
- 🚪 Logout Securely

---

# 🛠️ Tech Stack

## Backend
- Java 17
- Spring Boot
- Spring Security
- JWT Authentication
- Spring Data JPA
- MySQL
- Maven

## Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios

---

# 📂 Project Structure

```bash
redditclone/
│
├── backend/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── entity/
│   ├── dto/
│   └── security/
│
├── frontend/
│   ├── src/app/
│   ├── src/components/
│   ├── src/lib/
│   └── public/

⚙️ Backend Setup
1️⃣ Clone Repository
git clone https://github.com/saurav45322344/social_media_platform.git
2️⃣ Configure MySQL

Create database:

CREATE DATABASE redditclone;
3️⃣ Update application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/redditclone
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
4️⃣ Run Backend
mvn spring-boot:run

Backend runs on:

http://localhost:8081
💻 Frontend Setup
1️⃣ Install Dependencies
npm install
2️⃣ Run Frontend
npm run dev

Frontend runs on:

http://localhost:3000
🔐 Authentication APIs
Signup
POST /api/auth/signup
Request
{
  "username": "saurav",
  "email": "saurav@gmail.com",
  "password": "123456"
}
Login
POST /api/auth/login
Request
{
  "email": "saurav@gmail.com",
  "password": "123456"
}
🏘️ Community APIs
Create Community
POST /api/communities
Get Communities
GET /api/communities
📝 Post APIs
Create Post
POST /api/posts
Request
{
  "title": "Spring Boot Post",
  "content": "This is my first post",
  "communityId": 1,
  "imageUrl": "/uploads/image.png"
}
Get Feed Posts
GET /api/posts
🖼️ File Upload API
Upload Image
POST /api/upload
form-data
KEY	VALUE
file	image file
👍 Voting APIs
Upvote
POST /api/votes/upvote/{postId}
Downvote
POST /api/votes/downvote/{postId}
Remove Vote
DELETE /api/votes/{postId}
🔒 Security Features
JWT Authentication
Stateless Session
Protected APIs
Auto Logout
Session Storage Token
Spring Security Filters
✨ Features

✅ User Authentication
✅ JWT Authorization
✅ Create Communities
✅ Create Posts
✅ Upload Images
✅ Upvote/Downvote
✅ Responsive UI
✅ Secure APIs
✅ Feed System
✅ Logout Functionality
<img width="1920" height="1080" alt="Screenshot (355)" src="https://github.com/user-attachments/assets/5f7c598c-e74d-41cf-90bd-bcb035d289f9" />

<img width="1920" height="1080" alt="Screenshot (356)" src="https://github.com/user-attachments/assets/56044a7d-9510-4d3b-b56c-dda64e4c620e" />

<img width="1920" height="1080" alt="Screenshot (351)" src="https://github.com/user-attachments/assets/1f65a691-8658-482f-bab2-b67faa14a1e4" />

<img width="1920" height="1080" alt="Screenshot (352)" src="https://github.com/user-attachments/assets/3593d9ab-64c6-46ad-ac99-fb475ec10229" />




