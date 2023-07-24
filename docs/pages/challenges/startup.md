# Task Management System

In this challenge, you are expected to design and implement a task management system similar to Trello. Your system will
allow users to create projects, add tasks to those projects, assign tasks to users, and monitor task progress. You can
opt to create custom components or leverage pre-existing tools like Hasura or Supabase for faster development.

## Description

The task management system is an application composed of three main components: a backend server, a frontend client, and
a database.

## How this challenge works:

This is an advanced challenge to show that you can build real world applications. If you want to be a Full-Stack
Developer, then you can create and design the system on your own.

### Backend

The backend of your system should be capable of processing API requests for various operations, including user
authentication, project and task management, and notification sending. It should be able to communicate with the
database for storing and retrieving data.

In the interest of speeding up development, you might want to use [Hasura](https://hasura.io/)
or [supabase](https://supabase.com/) or [PocketBase](https://pocketbase.io/), which provide out-of-the-box backends
complete with authentication, database, and real-time capabilities.
Use the free plan of [nhost.io](https://nhost.io/) or [supabase](https://supabase.com/) first. If you want you can add
the services to your docker compose later.
Pocketbase has to be self hosted in your docker compose.
This will speed up development a lot.

If you want to expose your local running backend to the public service, because you need to receive a webhook, then use
[ngrok](https://ngrok.com/) as the service.

You could use one of those frameworks and languages:

- Typescript / Nest.js [Preferred]
- Kotlin / Micronaut
- Python / FastAPI

### Frontend

The frontend of your system should provide a user-friendly interface for interacting with the backend. This could be a
web-based UI that makes HTTP requests to the backend for different operations, or a mobile app that does the same.
For the mobile app we use Flutter, for the web frontend React.js or Next.js. If you want you can use a tool like
refine.dev to further quickstart your application.
Make sure to focus on a clean, modern design for your management system.

### Database

Your system's database should be designed to efficiently store and retrieve data related to users, projects, and tasks.
You should focus on using [PostgreSQL](https://www.postgresql.org/) as your primary database.

## Communication

Communication between the frontend and backend should occur through a well-defined API, using either REST or GraphQL.
This API should provide endpoints or operations for all of the necessary functionality, including user authentication,
project creation, task assignment, and more.

## Deployment

The entire system (frontend, backend, and database) should be deployed using `docker-compose`, providing an easy way to
run the application in any environment. `docker-compose` will allow you to manage all of your services in one place,
making it easy to start and stop your application, manage your database, and more.

## Core Functionality

Here are the core functionalities that your system should implement:

1. **Project Creation and Management**: Authenticated users should be able to create and manage projects.
2. **Task Creation and Assignment**: Users should be able to create tasks, assign them to other users, and monitor their
   progress.

## Optional Features

Here are some additional features that you might consider implementing if you have time:

1. **User Authentication**: Users should be able to register, log in, and log out of the system.
2. **Task Prioritization**: Allow users to prioritize tasks within a project.
3. **Progress Tracking**: Provide a visual representation of task and project progress.
4. **Comments and File Attachments**: Let users leave comments on tasks and attach relevant files.
5. **User Roles and Permissions**: Implement a system of user roles and permissions to control access to tasks and
   projects.
6. **Notification System**: Users should receive notifications when a task is assigned to them or when a task's
   deadline
   is approaching.

Remember, the most important aspect of this challenge is creating a functional application. Focus on implementing the
core functionality first, then work on optional features as time permits. Good luck!