---
title: 'Authentication'
description: "You'll need to authenticate your requests to access any endpoints in the Project API."
---

The Blutui Project API requires a Project access token to authenticate requests.API requests made without the correct access token will return a `401` error. Requests using a valid access token but with insufficient permissions will return a `403` error.

### Generating an Project Access Token

![Create Token](https://cdn.blutui.com/uploads/assets/Dev/API/project-api-create-token.png)

1. Select the Project you wish to access from the **Console**.
2. Navigate to the **Headless** tab.
3. Click on the **Create token** button to generate a new access token.

Here's how to authenticate with an access token using cURL:

```bash title="Example request with bearer token">
curl https://{handle}.blutui.com/api/menus \
  -H 'Authorization: Bearer ey....'
```
