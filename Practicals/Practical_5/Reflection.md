# Practical 5 — Reflection

**Student ID:** 02250359  
**Topic:** Jenkins Declarative Pipeline with build, test, deploy stages

---

## a) Main concepts applied

- Declarative Pipeline syntax and stage boundaries  
- Post-build actions and test reporting (JUnit)  
- Docker build and push as pipeline stages  
- Pipeline-as-code versioned in the repository  

---

## b) What I learned

- Structuring a readable multi-stage `Jenkinsfile`  
- Running Jest in CI and surfacing results in Jenkins  
- Chaining build → test → image publish in one automated run  
- Fixing syntax, brackets, and `dir()` scope in declarative pipelines  

---

## c) Challenges faced

| Challenge | Resolution |
|-----------|------------|
| `package.json` not found | Fixed `dir('Assignments/Assignment_2/backend')` |
| Jenkinsfile syntax errors | Corrected stage blocks and braces |
| Tests failing in CI | Aligned test paths and dependencies |
| Docker not in PATH | Added Docker binary path to `environment` |

---

## Summary

Practical 5 delivered a **complete declarative pipeline**—the core Jenkins CI/CD pattern used in industry and assessed in Assignment II.
