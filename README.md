# **Evento - Event Hosting and Management Website**

**Evento** is a web application built using the MERN (MongoDB, Express, React, Node.js) stack. It enables users to browse, create, and manage events. The app includes features like user authentication, event creation, and image uploading, all while maintaining a clean and responsive design with TailwindCSS. Zod is used for data validation, and Cloudinary manages image storage.

## **Features**

- **User Authentication**: Secure signup and login using JWT.
- **Event Management**: Create, view, edit, and delete events.
- **Explore Events**: Search and filter events based on date, location, and categories.
- **Responsive Design**: TailwindCSS ensures a mobile-friendly, modern design.
- **Image Uploads**: Store event images on Cloudinary.
- **Data Validation**: Zod is used for accurate and secure form validations.

## **Tech Stack**

### **Frontend**
- **React.js** for building interactive user interfaces.
- **TailwindCSS** for responsive and utility-first styling.

### **Backend**
- **Node.js** and **Express.js** for server-side operations.
- **MongoDB** for database management.
- **Mongoose** for object data modeling.
- **Zod** for data validation.

### **Other Integrations**
- **JWT** for user authentication and session management.
- **Cloudinary** for image upload and storage.

## **Installation**

### **Prerequisites**
Make sure you have the following installed:
- **Node.js** 
- **MongoDB** (either locally or via MongoDB Atlas)

### **Steps to Install**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/evento.git
   cd evento
   ```

2. **Install server dependencies:**
   
   Navigate to the `backend` folder and run:

   ```bash
   npm install
   ```

3. **Install client dependencies:**
   
   Navigate to the `frontend` folder and run:

   ```bash
   npm install
   ```

4. **Set up the `.env` file:**

   Create a `.env` file in the `backend` folder with the following:

   ```bash
   MONGO_URL=<your_mongo_url>
   MONGO_PASSWORD=<your_mongo_password>
   PORT=<your_port>
   JWT_SECRET=<your_jwt_secret>
   CLOUD_NAME=<your_cloudinary_cloud_name>
   API_KEY=<your_cloudinary_api_key>
   API_SECRET_KEY=<your_cloudinary_api_secret_key>
   CLOUDINARY_URL=<your_cloudinary_url>
   ```

5. **Run the development server:**

   - Start the backend server in the `backend` folder:
     ```bash
     npm run dev
     ```
   - Start the frontend in the `frontend` folder:
     ```bash
     npm start
     ```

6. **Access the app**: Open your browser and go to `http://localhost:3000`.

## **Usage**

- **Create Events**: Users can log in and create new events by providing event details like name, date, location, and an image.
- **Browse Events**: Explore all listed events.
- **Manage Events**: Event creators can edit or delete their own events.
- **RSVP**: Users can RSVP to events and manage their participation status.

## **Styling and Image Uploads**

- **TailwindCSS** is used for styling to ensure a clean and responsive user experience.
- **Cloudinary** is integrated for handling event images, allowing users to upload and store event-related images directly to the cloud.

## **License**

This project is licensed under the MIT License.
