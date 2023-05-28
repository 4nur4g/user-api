## Users API using Node/Express

This is a Node application that uses Express and Mongoose to create a RESTful API for managing users. The API allows you to perform CRUD (Create, Read, Update, Delete) operations on user documents stored in MongoDB.

### Architecture

The application follows the Model-Router-Controller (MRC) architecture for separating the concerns of data, routing, and logic. The main components are:

- **Model**: Defines the schema and methods for user documents using Mongoose.
- **Router**: Handles the HTTP requests and maps them to the appropriate controller functions using Express.
- **Controller**: Validates the request parameters, query, and body, performs the business logic, and sends the response with the correct status code and data.

The root file of the application is `app.js`. The base URL for the API is `/api/v1/users`.

### Endpoints

The API supports the following endpoints:

- `GET /`: Returns a list of all users with optional sorting and pagination parameters.
- `POST /`: Creates a new user with the given data in the request body and returns the created user.
- `GET /:id`: Returns a single user with the specified ID in the request parameter.
- `PATCH /:id`: Updates one or more fields of the user with the specified ID in the request parameter and returns the updated user.
- `DELETE /:id`: Deletes the user with the specified ID in the request parameter and returns a success message.

### Sorting and Pagination

The API supports sorting and pagination for the `GET /` endpoint. You can use the following query parameters to customize the results:

- `sort`: Specifies the property on which to sort the results. To sort in ascending order, use the property name as the value. To sort in descending order, use a minus sign (-) before the property name. For example, `sort=first_name` will sort by name in ascending order, while `sort=-first_name` will sort by name in descending order. By default, the API returns the sorted data based on the `first_name` property.
- `page`: Specifies the page number of the results to return. The default value is 1.
- `limit`: Specifies the number of results per page. The default value is 10.

### Error Handling

The application uses a custom error handling middleware to handle errors. The middleware catches all errors thrown by the controllers or other middlewares and sends a response with an appropriate status code and message. The application also uses the `express-async-errors` library to automatically direct all errors to this middleware.

### Security

The application uses several packages to enhance security, such as:

- **helmet**: Sets various HTTP headers to protect against common attacks.
- **cors**: Enables cross-origin resource sharing (CORS) to allow requests from different origins.
- **xss**: Sanitizes user input to prevent cross-site scripting (XSS) attacks.
- **rateLimiter**: Limits the number of requests per IP address to prevent denial-of-service (DoS) attacks.

### Configuration

You will need to set up a `.env` file in the root directory of the application to store the environment variables for connecting to MongoDB database. I have added an example `.env` file as `.env.example` that you can use as a reference. You will need to provide your own values for the variables such as `PORT` and `MONGO_URI`.

### Testing

You can test the API using Postman, a tool for making HTTP requests. I have exported the Postman collection and added it in the root directory as `User-API.postman_collection.json`. You can import it into Postman and use it to send requests to the API endpoints. To start the API, run `yarn dev` or `npm start` or `yarn start` or any other package of your choice in your terminal. 

