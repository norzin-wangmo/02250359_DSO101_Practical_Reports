# DSO101 — Consolidated Practical Report (8 Weekly Practicals)

**Student:** Norzin Wangmo  
**Student ID:** 02250359  
**Module:** DSO101 — Continuous Integration and Continuous Deployment  
**Date:** May 2026  

---

## 1. Introduction

DSO101 requires **eight weekly practical classes** (Practical Work & Report — 20% of CA Theory), each with a README-style report and reflection. This document consolidates all eight practicals from `Practicals/Practical_1` through `Practical_8`.

The module also includes **four separate assignments** (40% of CA Theory). Where assignment work supports a weekly practical, it is cited from [NorzinWangmo_02250359_DSO101_Works](https://github.com/norzin-wangmo/NorzinWangmo_02250359_DSO101_Works).

| # | Weekly practical topic | Related assignment work |
|---|------------------------|-------------------------|
| 1 | Docker environment & containerize web app | Assignment I — Dockerfiles |
| 2 | Multi-container app with Docker Compose | Assignment I — multi-service architecture |
| 3 | Optimize Docker image & security | Assignment I & III — amd64, env vars |
| 4 | Jenkins server & basic CI/CD | Assignment II — Jenkins setup |
| 5 | Jenkins Declarative Pipeline | Assignment II — `Jenkinsfile` |
| 6 | External tools & registry in Jenkins | Assignment II — npm, Jest, Docker Hub |
| 7 | Jenkins shared library | Assignment II — reusable pipeline patterns |
| 8 | GitHub Actions CI/CD & deploy | Assignment III & IV — Actions + Render |

---

## 2. Practical 1 — Docker Environment & Containerized Web Application

**Folder:** [Practicals/Practical_1](./Practicals/Practical_1/)

### Aim
Set up Docker and containerize a simple web application.

### Summary
Built separate Docker images for Todo app frontend and backend; used Docker CLI and Docker Hub. Reflection covers Dockerfile basics, port mapping, and image publishing.

### Key learning
Containerization fundamentals; images as deployable artifacts.

### Challenges
Port conflicts; dependency and path errors in Dockerfiles.

---

## 3. Practical 2 — Multi-Container Application (Docker Compose)

**Folder:** [Practicals/Practical_2](./Practicals/Practical_2/)

### Aim
Create a multi-container application using Docker Compose.

### Summary
Applied Compose concepts (services, networks, volumes) to the three-tier Todo design: frontend, backend API, PostgreSQL.

### Key learning
Orchestrating multiple services locally; environment-based DB connections.

### Challenges
Service startup order; aligning local Compose concepts with Render multi-service deploy.

---

## 4. Practical 3 — Docker Image Optimization & Security

**Folder:** [Practicals/Practical_3](./Practicals/Practical_3/)

### Aim
Optimize images for production and apply basic security measures.

### Summary
Used `linux/amd64` builds, `.dockerignore`, and runtime env vars instead of baked-in secrets.

### Key learning
Production image requirements for cloud hosts; `docker buildx`.

### Challenges
Platform mismatch on Render; image tag and registry alignment.

---

## 5. Practical 4 — Jenkins Server & Basic CI/CD

**Folder:** [Practicals/Practical_4](./Practicals/Practical_4/)

### Aim
Set up Jenkins and create a basic CI/CD pipeline for a Git repository.

### Summary
Installed Jenkins, configured NodeJS tools and GitHub credentials, connected Assignment II backend repo.

### Key learning
CI fundamentals; SCM integration and credential management.

### Challenges
Plugin setup; repository paths; first-run authentication errors.

---

## 6. Practical 5 — Jenkins Declarative Pipeline

**Folder:** [Practicals/Practical_5](./Practicals/Practical_5/)

### Aim
Implement a declarative pipeline with build, test, and deploy stages.

### Summary
`Jenkinsfile` stages: install → build → test (JUnit) → Docker build → Docker push.

### Key learning
Declarative syntax; pipeline-as-code in Git.

### Challenges
`dir()` paths; Jenkinsfile syntax; Docker PATH in pipeline environment.

---

## 7. Practical 6 — External Tools & Artifact Registry

**Folder:** [Practicals/Practical_6](./Practicals/Practical_6/)

### Aim
Integrate package managers and artifact registry into Jenkins.

### Summary
Integrated npm, Jest with JUnit reporting, and Docker Hub push with `docker-hub-creds`.

### Key learning
Connecting CI to registries and test tooling.

### Challenges
Docker login; JUnit report configuration; image naming.

---

## 8. Practical 7 — Jenkins Shared Library

**Folder:** [Practicals/Practical_7](./Practicals/Practical_7/)

### Aim
Create a shared library and use it in a pipeline.

### Summary
Studied shared library structure (Unit V); applied reusable stage patterns in the Assignment II Jenkinsfile aligned with library-style steps.

### Key learning
DRY pipeline design; reusable Groovy/declarative components.

### Challenges
Library repo setup vs inline Jenkinsfile; credential scope in shared code.

---

## 9. Practical 8 — GitHub Actions CI/CD & Deployment

**Folder:** [Practicals/Practical_8](./Practicals/Practical_8/)

### Aim
Implement a complete GitHub Actions workflow and deploy to servers.

### Summary
Assignment III: build/push Docker image, Render deploy hook. Assignment IV: static site Actions + Render Static Site.

### Live URLs
- https://dso101-assignment-3.onrender.com  
- https://assignment-4-render-app.onrender.com  

### Key learning
Workflow YAML, secrets, Actions vs Jenkins, automated deploy on push.

### Challenges
`working-directory`; amd64 builds; Render static publish path.

---

## 10. Cross-module progression

| Phase | Practicals | Theme |
|-------|------------|--------|
| Docker foundations | 1–3 | Containerize, compose, optimize |
| Jenkins CI/CD | 4–7 | Server, pipeline, integrations, reuse |
| Cloud-native CD | 8 | GitHub Actions & deployment |

---

## 11. Conclusion

All **eight DSO101 weekly practicals** are documented with README and Reflection files. Together with four assignments in the coursework repository, they demonstrate progression from Docker basics through Jenkins automation to GitHub Actions deployment.

---

## 12. References

- DSO101 Module Descriptor (Practical Work & Report × 8)  
- Docker — https://docs.docker.com/  
- Jenkins — https://www.jenkins.io/doc/  
- GitHub Actions — https://docs.github.com/en/actions  
- Render — https://render.com/docs  
- Source repo — https://github.com/norzin-wangmo/NorzinWangmo_02250359_DSO101_Works  
