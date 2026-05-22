# Practical 4 — Reflection

**Student ID:** 02250359  
**Topic:** Jenkins setup and basic CI/CD for a Git repository

---

## a) Main concepts applied

- Continuous Integration fundamentals  
- Jenkins architecture (controller, agents, plugins)  
- SCM integration with GitHub  
- Credential storage in Jenkins  

---

## b) What I learned

- Installing Jenkins and required plugins (NodeJS, Git, Docker workflow support)  
- Creating jobs/pipelines tied to a Git repository  
- Configuring credentials safely for GitHub access  
- Reading console output to debug first pipeline failures  

---

## c) Challenges faced

| Challenge | Resolution |
|-----------|------------|
| Jenkins plugin dependencies | Installed NodeJS and Git plugins |
| Repository path errors | Corrected workspace `dir()` to backend folder |
| Authentication failures | Recreated GitHub PAT credentials with correct ID |
| First run failures | Fixed branch and SCM configuration |

---

## Summary

Practical 4 introduced **Jenkins as the CI hub**—connecting source control to automated builds before advanced pipeline stages in Practicals 5–7.
