# Deployment and installation
With this configuration, you can use the ent cli (https://dev.entando.org/next/docs/reference/entando-cli.html) to perform the full deployment sequence:

### Setup the project directory.
1. Prepare the bundle directory: `cp -r bundle_src bundle`
2. Initialize the project: `ent prj init`
3. Initialize publication: `ent prj pbs-init` (requires the git bundle repo url)
4. Attach to kubernetes for an Entando application via ent attach-kubeconfig config-file or similar

### Publish the bundle.
1. Build: `ent prj build` (build the frontend and backend) or `ent prj fe-build -a` (to just build the frontend, including changes from bundle_src)
2. Publish: `ent prj pub` or `ent prj fe-push` (publish all or just the frontend)
3. Deploy (after connecting to k8s above): `ent prj deploy`
4. Install the bundle via 1) App Builder, 2) `ent prj install`, or 3) `ent prj install --conflict-strategy=OVERRIDE` on subsequent installs.
5. Iterate steps 1-4 to publish new versions.

# Development notes
## Tips
* Check for the "CHANGE-IT" placeholders

## Local testing of the project
You can use the following commands to test the microservices
* `ent prj keycloak start` - or stop to shutdown keycloak again.
* `ent prj be-test-run`

## Local setup
* Access Keycloak at http://localhost:9080/auth/
* Access Springboot at http://localhost:8081/swagger-ui.html
* Use client web_app when authorizing the microservices

## Notes
* Two users are included in the keycloak realm config
    * admin/admin - admin user with realm-admin
    * user/user - regular user