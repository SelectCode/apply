# Micronaut Challenge

Welcome to the Micronaut & Kotlin Challenge! This challenge will test your ability to create a RESTful API using the
Micronaut framework and Kotlin.

Before you start, you should be familiar with Kotlin, Micronaut, and the basics of creating microservices. Here are some
resources to get you started:

- [Kotlin Official Documentation](https://kotlinlang.org/docs/home.html)
- [Micronaut Official Documentation](https://docs.micronaut.io/latest/guide/index.html)

## Challenge Tasks:

1. **API for an Online Marketplace**

   Your task is to design and build a RESTful API for an online marketplace using Micronaut and Kotlin. The application
   should be able to handle products and orders.

    - Your API should support the following operations:
        - `GET /products/`: Retrieve a list of all products.
        - `GET /products/{product_id}`: Retrieve the details of a specific product.
        - `POST /products/`: Add a new product. The details of the product should be sent as JSON in the body of the
          request.
        - `PUT /products/{product_id}`: Update the details of an existing product. The new details should be sent as
          JSON in the body of the request.
        - `DELETE /products/{product_id}`: Remove a product from the marketplace.
        - `POST /orders/`: Place a new order. The details of the order should be sent as JSON in the body of the
          request.
    - Each product should have at least the following properties:
        - `id`: A string that serves as the unique identifier for the product.
        - `name`: A string that contains the name of the product.
        - `description`: A string that contains a description of the product.
        - `price`: A decimal representing the price of the product.
    - Each order should have at least the following properties:
        - `id`: A string that serves as the unique identifier for the order.
        - `productId`: A string that identifies which product the order is for.
        - `quantity`: An integer representing how many of the product are being ordered.

2. **Data Validation**

   Implement data validation to ensure that when creating or updating a product, all required fields are provided and
   are of the correct type. If validation fails, your API should return a `400 Bad Request` status code and a JSON
   response body that provides more information about the validation errors.

3. **Error Handling**

   Implement error handling to ensure that when a client sends a request for a product or an order that does not exist,
   your API responds with a `404 Not Found` status code and a JSON response body that includes a user-friendly error
   message.

4. **Testing**

   Write tests for your API using Micronaut's built-in testing tools to ensure it works as expected.

## Definition of Done

For completing this challenge, please ensure that you meet the following requirements:

- Your Micronaut application fulfills all functional requirements (including the described API endpoints, input
  validation and error handling).
- Your application can be run using `docker-compose`.
- The included tests all pass successfully.
- A `README.md` file explains how to install any necessary dependencies, how to run your application, and how to run
  your tests.

## Evaluation Criteria 🪄

We will evaluate your work based on the following:

- **Functional quality**: How well the functional requirements are fulfilled.
- **Code quality**: We're looking for clean, readable, and well-structured code.
- **Test quality**: We're looking for well-structured and meaningful tests - so that the relevant cases are covered.
- **Documentation quality**: We're looking for a well-structured `README.md` file that contains all necessary
  information as well as well-documented code.

Good luck - and have fun! 🚀