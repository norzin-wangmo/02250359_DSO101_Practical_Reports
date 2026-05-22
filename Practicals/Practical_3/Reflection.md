# Practical 3 — Reflection

**Student ID:** 02250359  
**Topic:** Docker image optimization and security

---

## a) Main concepts applied

- Reducing image size and layer count  
- Multi-platform builds (`linux/amd64`)  
- Registry tagging and image versioning  
- Runtime secrets via environment variables (not in image layers)  

---

## b) What I learned

- Cloud hosts often require amd64 images even on Apple Silicon dev machines  
- `docker buildx` for cross-platform builds  
- Why production images should not contain `.env` or passwords  
- How optimization and security affect deployment reliability on Render  

---

## c) Challenges faced

| Challenge | Resolution |
|-----------|------------|
| Render rejecting arm64 images | Rebuilt with `--platform linux/amd64` |
| Large slow builds | Improved `.dockerignore` and layer order |
| Exposed secrets risk | Moved config to Render env vars |
| Image reference errors | Aligned Docker Hub tags with Render settings |

---

## Summary

Practical 3 focused on **production-ready images**: correct platform, lean builds, and secure configuration for CI/CD pipelines later in the module.
