# Kubernetes Challenge

Welcome to the Kubernetes Challenge! This exercise is designed to evaluate your skills and understanding of Kubernetes.
You are tasked to set up a local Kubernetes cluster using [k3d](https://k3d.io/), Docker Desktop or Minikube, and deploy
various services using Kubernetes concepts such as Ingress, ConfigMaps, and NodePort.

## Why Kubernetes?

Kubernetes, often referred to as K8s, is an open-source platform designed to automate deploying, scaling, and managing
containerized applications. It groups containers that make up an application into logical units for easy management and
discovery.

Here's why it's important for developers:

1. **Simplified Management:** Kubernetes simplifies the process of managing hundreds, even thousands, of containers that
   are typically involved in modern applications.

2. **Scalability:** It provides features like auto-scaling which are essential for applications that need to scale out
   quickly and efficiently in response to fluctuating demand.

3. **Portability and Flexibility:** Kubernetes can run on various platforms: on-premise, hybrid, or public cloud
   infrastructure, giving the flexibility to move workloads based on needs.

4. **Service Discovery and Load Balancing:** Kubernetes can expose a container using the DNS name or their own IP
   address. If traffic to a container is high, Kubernetes can load balance and distribute the network traffic to
   stabilize the deployment.

5. **Self-Healing:** Kubernetes restarts containers that fail, replaces and reschedules containers when nodes die, kills
   containers that don’t respond to user-defined health checks, and doesn't advertise them to clients until they are
   ready to serve.

6. **Automated Rollouts and Rollbacks:** Kubernetes progressively rolls out changes to your application or its
   configuration, while monitoring application health to ensure it doesn't kill all your instances at the same time.

As a developer, learning Kubernetes allows you to design and manage applications built for scale and efficiency, making
it a highly desirable skill in the industry.

## Task Description

1. **Local Kubernetes Cluster:** Set up a local Kubernetes cluster using k3d, Docker Desktop, or Minikube. Document the
   steps you followed and any challenges you faced during the setup.

2. **Static Site Deployment:** Create a static HTML site using [PicoCSS](https://picocss.com/), featuring a recipe of
   your choice (bonus points for a fun recipe from ChatGPT!). Decide on the deployment strategy for this site in a
   Kubernetes cluster. Would you build a custom docker image, use a persistent volume mount, or employ a ConfigMap?
   Justify your choice.

3. **Kubernetes Manifests:** Write Kubernetes manifests to deploy this site to your cluster. Expose the site using a
   NodePort on port 80.

4. **Ingress Controller:** Implement an Ingress controller (another nginx instance) to manage access to your services.
   You can deploy it via Helm (use [Helmfile](https://github.com/roboll/helmfile)) or use one of the default methods
   provided. Include the yaml configuration file in your submission and explain your choice of ingress controller (nginx
   vs traefik).

5. **Database Deployment Opinion:** Share your personal opinion on deploying a Postgres database on a Kubernetes cluster
   versus using a managed service. Discuss potential pros and cons. If you were to deploy Postgres on a cluster, which
   operator would you use and how would you expose the databases?

## Submission Instructions

Create a new repository on your GitHub account to submit your solutions. Include all yaml configuration files and a
detailed README.md file explaining your process, thought process, and answers to the discussion points.

We value your journey as much as the final product. Commit regularly with clear, informative messages to let us follow
your thought process.

Good luck! We look forward to your submission.
