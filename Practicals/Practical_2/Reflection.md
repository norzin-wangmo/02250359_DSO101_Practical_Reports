# Practical 2 — Reflection

**Student ID:** 02250359  
**Topic:** Multi-container applications with Docker Compose

---

## a) Main concepts applied

- Docker Compose file structure (`services`, `networks`, `volumes`)  
- Running frontend, backend, and database as separate services  
- Container-to-container communication on Docker networks  
- Environment-based configuration for development vs production  

---

## b) What I learned

- Why monolithic containers are avoided for full-stack apps  
- How Compose simplifies starting and stopping the full stack locally  
- Connecting an API container to a PostgreSQL service via env vars  
- Mapping module Unit II topics to the Todo app’s three-tier design  

---

## c) Challenges faced

| Challenge | Resolution |
|-----------|------------|
| Service startup order | Used depends_on / health check patterns from module |
| Database connection from API | Set `DATABASE_URL` for the backend service |
| Port exposure between services | Published only required host ports |
| Render vs local Compose | Used Compose concepts locally; Render for cloud orchestration |

---

## Summary

Practical 2 extended containerization to **orchestrated multi-container systems**, matching how the Todo app runs as separate deployable services.
