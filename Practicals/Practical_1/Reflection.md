# Practical 1 — Reflection

**Student ID:** 02250359  
**Topic:** Docker environment and containerizing a web application

---

## a) Main concepts applied

- Containerization vs virtual machines  
- Docker images, containers, and the Docker CLI  
- Dockerfile syntax (`FROM`, `WORKDIR`, `COPY`, `RUN`, `EXPOSE`, `CMD`)  
- Building and tagging images for local and registry use  

---

## b) What I learned

- How to write Dockerfiles for Node.js backend and static frontend services  
- Running containers with port mapping and environment variables  
- Using `.dockerignore` to keep images lean  
- Pushing images to Docker Hub for deployment elsewhere  

---

## c) Challenges faced

| Challenge | Resolution |
|-----------|------------|
| Port conflicts on host | Mapped container ports explicitly |
| Missing dependencies in image | Ensured `npm install` in Dockerfile build steps |
| Wrong base image or path errors | Corrected `WORKDIR` and `COPY` paths |
| Platform issues later on Render | Learned to target `linux/amd64` in later practicals |

---

## Summary

Practical 1 established the foundation for the module: **turning a web application into portable Docker images** ready for registry and cloud deployment.
