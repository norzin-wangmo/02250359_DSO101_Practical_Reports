# Practical 8 — Reflection

**Student ID:** 02250359  
**Topic:** GitHub Actions CI/CD and deployment to servers

---

## a) Main concepts applied

- GitHub Actions workflows, jobs, and steps  
- Secrets and environment variables in Actions  
- Docker build/push in CI runners  
- Deploy hooks and platform deployment (Render)  
- Comparison: GitHub Actions vs Jenkins (module Unit VII)  

---

## b) What I learned

- Writing `.github/workflows/deploy.yml` with `working-directory` for monorepos  
- Using Docker Hub as deployment artifact for Render web services  
- Debugging failed Actions runs from logs  
- Lightweight CI for static sites without containers  
- End-to-end automation: git push → pipeline → live URL  

---

## c) Challenges faced

| Challenge | Resolution |
|-----------|------------|
| Workflow path / `package.json` location | Set `working-directory: Assignments/Assignment_3` |
| Platform mismatch on Render | Built with `--platform linux/amd64` |
| Missing secrets | Added Docker Hub and Render hook to repo secrets |
| Static site Render config | Set publish directory for Assignment IV folder |

---

## Summary

Practical 8 completed the module’s CI/CD journey with **GitHub Actions**—from containerized API deployment to static site hosting—without manual deploy steps.
