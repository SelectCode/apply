# NestJS Challenge

Welcome to the NestJS Challenge! In this challenge, you'll demonstrate your ability to create a scalable task management
system similar to Trello using NestJS, TypeScript, and an event-driven architecture.

Before you start, ensure you're comfortable with TypeScript, NestJS, event-driven architecture, and basic authentication
strategies. The following resources may be helpful:

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [NestJS Official Documentation](https://docs.nestjs.com/)
- [Understanding Event-driven Architecture](https://docs.nestjs.com/techniques/events)
- [Sessions and Cookies in Node.js](https://docs.nestjs.com/security/authentication)
- [Nest.js Logging](https://docs.nestjs.com/techniques/logger)
- [Nest.js TypeORM](https://docs.nestjs.com/techniques/database)

## Challenge Tasks:

1. **API for a Task Management System**

   Your primary task is to design and build a RESTful API for a task management system using NestJS and TypeScript. The
   data should be persisted in a postgres database. Make sure to use docker-compose for launching the backend and
   database.

    - Your API should support the following operations:
        - `POST /auth/`: Authenticate a user and create a session.
        - `GET /projects/`: Retrieve a list of all projects for a user.
        - `POST /projects/`: Add a new project. The details of the project should be sent as JSON in the body of the
          request.
        - `PUT /projects/{project_id}`: Update the details of an existing project. The new details should be sent as
          JSON in the body of the request.
        - `DELETE /projects/{project_id}`: Remove a project.
        - `GET /projects/{project_id}/tasks/`: Retrieve a list of tasks in a project.
        - `POST /projects/{project_id}/tasks/`: Add a new task to a project.
        - `PUT /projects/{project_id}/tasks/{task_id}`: Update the details of a task in a project.
        - `DELETE /projects/{project_id}/tasks/{task_id}`: Remove a task from a project.
    - Each project and task should have at least the following properties:
        - `id`: A string that serves as the unique identifier.
        - `name`: A string that contains the name of the project or task.
        - `description`: A string that contains a short description.
        - `createdDate`: A string that contains the date the project or task was created.

2. **Event Queue and Event-driven Architecture**

   Implement an event queue and use an event-driven architecture for updating tasks and projects.

    - When a task is added (`POST /projects/{project_id}/tasks/`), an event should be published to the queue with the
      task details.
    - When a task is removed (`DELETE /projects/{project_id}/tasks/{task_id}`), an event should be published to the
      queue with the task id.
    - There should be a separate event listener which subscribes to these events and logs a message for each event.

3. **Testing**

   Write tests for your API using Jest (the default testing framework for NestJS) to ensure it works as expected.

## Definition of Done

For completing this challenge, please ensure that you meet the following requirements:

- Your NestJS application fulfills all functional requirements (including the described API endpoints and event-driven
  architecture).
- Your application can be run using `docker-compose`.
- The included tests all pass successfully.
- A `README.md` file explains how to install any necessary dependencies, how to run your application, and how to run
  your tests.

As soon as you have finished both other challenges, please submit your solution in our [online form](https://tally.
so/r/w5jbp6).

## Evaluation Criteria 🪄

We will evaluate your work based on the following:

- **Functional quality**: How well the functional requirements are fulfilled.
- **Code quality**: We're looking for clean, readable, and well-structured code.
- **Test quality**: We're looking for well-structured and meaningful tests - so that the relevant cases are covered.
- **Documentation quality**: We're looking for a well-structured `README.md` file that contains all necessary 
  information as well as well-documented code.
- **Problem solving**: Remember, we're not just interested in the final product - we want to see how you got there. 
  Commit early and often, with clear and informative commit messages.

Best of luck with the challenge! We're excited to see your creative solutions. 🚀

Good luck - and have fun! 🚀