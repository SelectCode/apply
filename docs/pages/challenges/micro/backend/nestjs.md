# NestJS Challenge

Welcome to the NestJS Challenge! This challenge will test your ability to create a scalable application using NestJS,
TypeScript, and an event-driven architecture with an event queue.

Before you start, you should be familiar with TypeScript, NestJS, and the basics of event-driven architecture. Here are
some resources to get you started:

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [NestJS Official Documentation](https://docs.nestjs.com/)
- [Understanding Event-driven Architecture](https://microservices.io/patterns/data/event-driven-architecture.html)

## Challenge Tasks:

1. **API for a Book Store**

   Your first task is to design and build a RESTful API for a book store using NestJS and TypeScript.

    - Your API should support the following operations:
        - `GET /books/`: Retrieve a list of all books.
        - `GET /books/{book_id}`: Retrieve the details of a specific book.
        - `POST /books/`: Add a new book. The details of the book should be sent as JSON in the body of the request.
        - `PUT /books/{book_id}`: Update the details of an existing book. The new details should be sent as JSON in the
          body of the request.
        - `DELETE /books/{book_id}`: Remove a book from the store.
    - Each book should have at least the following properties:
        - `id`: A string that serves as the unique identifier for the book.
        - `title`: A string that contains the title of the book.
        - `author`: A string that contains the name of the author.
        - `publishedDate`: A string that contains the book's published date.

2. **Event Queue and Event-driven Architecture**

   Implement an event queue and use an event-driven architecture for updating book stock.

    - When a book is added (`POST /books/`), an event should be published to the queue with the book details.
    - When a book is removed (`DELETE /books/{book_id}`), an event should be published to the queue with the book id.
    - There should be a separate event listener which subscribes to these events and logs a message for each event.

3. **Testing**

   Write tests for your API using Jest (the default testing framework for NestJS) to ensure it works as expected.

To complete this challenge, you should submit the following:

- The source code of your NestJS application.
- Any tests you wrote for your application.
- A `README.md` file that explains how to install any necessary dependencies, how to run your application, and how to
  run your tests.

Please fork this repository to your own GitHub account, add your solutions, and send us the link when you are ready.
Good luck!

---

This challenge should give a good sense of the applicant's ability to design and implement an event-driven API,
understanding of NestJS and TypeScript, and their ability to write effective tests.