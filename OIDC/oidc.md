# Understanding OpenID Connect (OIDC)

## What is OpenID Connect (OIDC)?
OpenID Connect (OIDC) is an identity layer built on top of the OAuth 2.0 protocol. It allows clients (applications) to verify the identity of a user and to obtain basic profile information about the user in an interoperable and REST-like manner.

OIDC is widely used for user authentication and single sign-on (SSO) solutions.

---

## Key Components of OIDC
1. **End-User**: The person who wants to log in.
2. **Client**: The application that the user is trying to access.
3. **Identity Provider (IdP)**: A trusted service that authenticates the user and provides identity information.
4. **Authorization Server**: A server that issues access and identity tokens after verifying the user.
5. **Resources**: APIs or services the client wants to access.

---

## Key Tokens in OIDC
1. **ID Token**: 
   - A JSON Web Token (JWT) that contains information about the user (e.g., username, email).
   - It is intended for the client to authenticate the user.

2. **Access Token**:
   - A token that grants the client access to protected resources (APIs).
   - Does not contain identity information.

3. **Refresh Token** (optional):
   - A long-lived token used to obtain new access tokens without re-authenticating the user.

---

## How OIDC Works: Step-by-Step
1. **Authorization Request**:
   - The client redirects the user to the Identity Provider's authorization endpoint with a request for authentication and identity information.
   - Example URL parameters:
     - `client_id`: The application's ID.
     - `redirect_uri`: The URL to redirect the user after authentication.
     - `scope`: Specifies the access requested (e.g., `openid profile email`).
     - `response_type`: Indicates what the client expects (`code`, `id_token`, or both).

2. **User Authentication**:
   - The Identity Provider prompts the user to log in (e.g., via username/password or other methods like MFA).
   - After successful login, the user is authenticated.

3. **Authorization Code Grant**:
   - The IdP redirects the user back to the client with an **authorization code**.
   - Example:
     ```
     https://client.example.com/callback?code=abc123
     ```

4. **Token Exchange**:
   - The client sends the authorization code to the IdP's token endpoint to exchange it for tokens.
   - The request includes:
     - `client_id` and `client_secret`
     - `authorization_code`
     - `redirect_uri`
   - The IdP responds with:
     - **ID Token**: Contains user identity information.
     - **Access Token**: Grants access to APIs.

5. **Accessing Resources**:
   - The client uses the access token to call APIs or access resources on behalf of the user.

6. **Optional Refresh Token**:
   - If a refresh token is issued, the client can use it to obtain new tokens without user interaction.

---

## OIDC Schema Diagram

```plaintext
  +--------+                                +---------------+
  |        |--(1) Authorization Request --->|               |
  |        |                                |               |
  |        |<-(2) Authorization Code -------|               |
  |        |                                |               |
  |        |--(3) Token Request ------------| Authorization |
  | Client |                                |     Server    |
  |        |<-(4) ID & Access Tokens -------|               |
  |        |                                |               |
  |        |--(5) Access Protected Resource-|               |
  |        |   using Access Token           |               |
  +--------+                                +---------------+
       ^
       |
       | (0) User authenticates
       |
  +--------+
  |  User  |
  +--------+
