# Docker & Deno Challenge

Welcome to the Docker & Deno Challenge! This challenge tests your understanding of Docker, an important tool for
deploying containerized applications, and Deno, a secure runtime for JavaScript and TypeScript.

Before proceeding, ensure you're familiar with the basics of Docker and Deno:

- [Docker's Get Started Guide](https://docs.docker.com/get-started/)
- [Deno's Manual](https://deno.land/manual)

## Challenge Tasks:

1. **Dockerfile Creation:**

    - Create a Dockerfile for a simple Deno server. The server should run on port 8000 and return "Hello Docker!" when
      accessed.
    - The Dockerfile should start with a base image of Deno, copy the server application into the container, expose the
      correct port, and specify the command to run the Deno server.
    - Build the Docker image and run the container, then test it by accessing the server at `http://localhost:8000`.

2. **Docker Compose:**

    - Extend the previous challenge by adding a Redis database to the server.
    - The Deno server should increment a counter in the Redis database each time the index page is accessed, and display
      the current counter value on the page.
    - Use Docker Compose to manage both the Deno server and the Redis database. Your Docker Compose file should define
      both services and ensure they are linked.

3. **Docker Networking:**

    - Create a second Deno server that runs on port 8001 and connects to the Redis database of the first server.
    - This server should display the current counter value from the Redis database.
    - Set up a Docker network that allows these two servers to communicate with each other.

4. **Docker Volumes:**

    - Create a Docker volume and mount it to the first Deno server.
    - Modify the Deno server to write a timestamp to a log file each time the index page is accessed.
    - The log file should be stored in the Docker volume, so the logs are preserved even if the container is stopped and
      removed.

To complete this challenge, you should submit the following:

- The source code of your Deno servers.
- The Dockerfile you created.
- The Docker Compose file you used.
- A brief document explaining how you set up the Docker network and volume.
- A README.md file documenting the steps to build and run your application.

Please fork this repository to your own GitHub account, add your solutions, and send us the link when you are ready.
Good luck!
