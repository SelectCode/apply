# React Challenge 2 🤯

Welcome to the React coding challenge 2! In this challenge, your task is to build a frontend for a project management application using React. 
We have already built a robust backend for your application service. 
This challenge will test your understanding and application of React components, props, states, hooks and more. 

## Requirements

The application should be able to handle various projects and respective tasks. 

Backend data model:
-	Project properties: project_id, email_address, name, description, created_at
-	Task properties: task_id, project_id, name, description, created_at, status (enum - OPEN / IN_PROGRESS / DONE)

Project_id of project, task_id, created_at and email_address are automatically set upon creation and are not mutable. 

### The following functionalities should be provided: 
1.	Create a new project with a name and a description
2.	Edit name and description of a project
3.	Delete a project
4.	Display all projects
5.	Create a new task for an existing project with a project_id, name, description and status. The status is set to OPEN by default. 
6.	Edit name and description of a task
7.	Change the status of a task
8.	Delete a task
9.	Display all tasks for a specific project

The backend provides all necessary methods. You can take a look at them in the included [.yaml file](ReactChallenge2Insomnia.yaml). Best to be opened in Insomnia (https://insomnia.rest/download).  


Additional details:

- Ensure the implementation is user-friendly with a clean, intuitive user-interface. 
- The application should be responsive in design and should work on different screen sizes. 
- Thoughtful error handling and loading states for better UX. 
- Include comments to explain your implementation approach. 

## What has already been implemented for you ✅

The backend uses Hasura to create an API, Postgres as a database, 
GraphQL for the requests and Cloudflare workers to generate JWTs (https://jwt.io/introduction) needed for authorization. 

![Unbenanntes Diagramm](https://github.com/SelectCode/apply/assets/142333901/b1b6f3b3-5d61-43df-9526-773d13b1589b)


Each project is exclusively mapped to a single user through their email-address. By that, the respective tasks are restricted to the creator of the project as well. 
Users can only create, access, edit and delete their own projects and taks and do not have access to the projects and tasks of other users. 
This is guaranteed by the Hasura JWT Authentication service (https://hasura.io/docs/latest/auth/authentication/jwt/). 


The flow is as follows: 

First, a HTTP post request must be sent to this url: *** . 
The body of the request must be in JSON and include a parameter called “email” with the value of the user’s email address.

```json
{
  "email": "test@selectcode.de"
}
```
With this request a JWT for the authentification of the user is generated and sent back in the body of the response.
This token has to be included in the request header of each GraphQL query/mutation. Else, access will be denied. 😈

The requests have to be sent to this URL: https://react-challenge.deploy.selectcode.dev/v1/graphql.
One of the header titles of each request must be set to "Authorization" and the value to "Bearer < JWT > ".

```
Authorization        Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJ4LWhhc3VyYS11c2VyLWVtYWlsLWFkZHJlc3MiOiJ0ZXN0QHNlbGVjdGNvZGUuZGUifSwiaWF0IjoxNjk1MTMyMjg4fQ.ytE-IrCfyKJOBVB5x-yWw8bTDHgmaGQ3RBtmeeXwXvw
```



## Definition of done 🎉 

For completing this challenge, please ensure that you meet the following requirements:
- Your React application fulfills all described functional requirements.
- A README.md file explains how to install any necessary dependencies and how to run your application.
Please also include a short description and explanation of the main aspects of your chosen approaches.

As soon as you have finished both other challenges, please submit your solution in our online form.

## Evaluation criteria 🔎

We will evaluate your work based on the following:
- Functional fit: How well the functional requirements are fulfilled.
- Design: We’re looking for a user-friendly and intuitive design. Moreover, your page should adapt to different screen sizes.
- Code quality: We're looking for clean, readable, and well-structured code.
- Documentation quality: We're looking for a well-structured README.md file that contains all necessary information as well as well-documented code.
- Problem solving: Remember, we're not just interested in the final product - we want to see how you got there. Commit early and often, with clear and informative commit messages.

Good luck with your coding — and remember to enjoy the process! 🚀
