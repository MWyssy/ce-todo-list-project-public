### Share any challenges you had and how you resolved them

1. Getting the database pod working - We struggled for a long time to try and work out why the database image wouldn't work when using Kubernetes. After checking the logs, we discovered that the issue related to initialising PSQL. After researching this issue, we discovered that we needed to pass in the environment variables for POSTGRES_PASSWORD, POSTGRES_USER and POSTGRES_DB into our deployment.yaml.

2. We got a little stuck when moving onto ArgoCD because we forgot to push the changes to GitHub, so while we thought we had fixed the issue with the database, when we used ArgoCD, it was broken again. Pushing fixed this.  

3. Getting the apps working through ArgoCD using Helm Charts - We found it a challenge when using Helm charts because everything seemed to work fine first time, but we discovered that the back-end was not communicating with the database. We realised that the naming of the database service had been changed by Helm, so we had to fix the DNS pointer in the backend, which then restored the link. 