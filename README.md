# Password Manager

This is a basic password manager application built using Node.js, Express, and MongoDB. The application follows a CRUD (Create, Read, Update, Delete) functionality to handle password records.

### Technologies Used
- Node.js: A JavaScript runtime environment used for server-side development.
- MongoDB: A NoSQL database used for storing user and password records.
- GitHub Codespaces: An integrated development environment (IDE) provided by GitHub for seamless coding and collaboration.

### Dependencies
The application relies on the following dependencies:

- axios: A promise-based HTTP client for making HTTP requests from Node.js.
- body-parser: A middleware for parsing incoming request bodies in Express.js.
- dotenv: A module for loading environment variables from a .env file.
- ejs: A template engine for rendering dynamic HTML pages.
- express: A web application framework for Node.js used for routing and middleware.
- mongoose: An object modeling tool for MongoDB, providing a straightforward schema-based solution.
- morgan: A HTTP request logger middleware for Node.js.
- nodemon: A utility that monitors changes in the source code and automatically restarts the server.

### Architecture
The application follows the MVC (Model-View-Controller) architecture, which promotes a clear separation of concerns and enhances maintainability and scalability.

- Model: The model represents the data and business logic of the application. In this password manager, the models define the structure and behavior of the user and password records using Mongoose schemas.
- View: The view is responsible for rendering the user interface. In this application, EJS templates are used to dynamically generate HTML pages and display data to the users.
- Controller: The controller handles the application logic, acts as an intermediary between the model and view, and processes user requests. In this password manager, the controllers handle user authentication, password management operations, and interact with the models to perform CRUD operations on the database.


![home_screen](https://github.com/navyagarwal/my-password-manager/assets/82928853/cf5eb228-18a3-44f4-b4a1-6adba382455d)

![image](https://github.com/navyagarwal/my-password-manager/assets/82928853/e6283a16-74d0-49b8-ba62-868ea30297c6)
