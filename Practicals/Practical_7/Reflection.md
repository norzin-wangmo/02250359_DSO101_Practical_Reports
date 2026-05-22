# Practical 7 — Reflection

**Student ID:** 02250359  
**Topic:** Jenkins shared libraries and reusable pipeline components

---

## a) Main concepts applied

- Pipeline-as-code and version-controlled `Jenkinsfile`  
- Shared libraries for reusable Groovy steps (`vars/customStep.groovy`)  
- Reducing duplication across multiple pipelines  
- Global vs folder-level library configuration  

---

## b) What I learned

- Why organizations extract common stages into shared libraries  
- How declarative pipelines call shared library steps  
- Mapping Assignment II stages to library-style reusable functions  
- Trade-off between inline Jenkinsfile clarity and library abstraction  

---

## c) Challenges faced

| Challenge | Resolution |
|-----------|------------|
| Library repo setup complexity | Focused on reusable stage design in Jenkinsfile first |
| Groovy vs declarative syntax | Followed declarative pipeline for Assignment II |
| Testing library changes | Used branch builds and Jenkins replay |
| Credential scope in libraries | Kept credentials referenced by ID in Jenkins |

---

## Summary

Practical 7 covered **reusable pipeline architecture**—shared libraries and DRY stage design—building on Jenkins skills from Practicals 4–6.
