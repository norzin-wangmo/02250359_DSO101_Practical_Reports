# Practical 6 — Reflection

**Student ID:** 02250359  
**Topic:** External tools and artifact registry in Jenkins

---

## a) Main concepts applied

- Build tools and package managers inside CI pipelines  
- Artifact repositories (Docker Hub as container registry)  
- Test integration and published reports  
- Credential IDs for external services  

---

## b) What I learned

- How npm and Jest fit into Jenkins stages  
- Publishing JUnit results for visibility in Jenkins  
- Authenticating to Docker Hub from pipeline steps  
- Treating the registry as the hand-off point for deployment environments  

---

## c) Challenges faced

| Challenge | Resolution |
|-----------|------------|
| `docker: command not found` | Set `PATH` to Docker Desktop binaries |
| Docker Hub login failures | Verified `docker-hub-creds` username/password |
| Test report not showing | Configured JUnit plugin and test output path |
| Wrong image name/tag | Standardized image naming in push stage |

---

## Summary

Practical 6 connected the pipeline to **real DevOps tooling**—package management, automated tests, and a container registry—mirroring production CI/CD integrations.
