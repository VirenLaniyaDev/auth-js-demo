## Overview

This sample application is built using **Next.js** with **Auth.js** for handling authentication and authorization. The app offers two authentication methods:

1. **Credentials Sign-In**: Users can sign in using their own custom username and password.
2. **GitHub Sign-In**: Users can sign in through their GitHub account for OAuth-based authentication.

### Key Features:

- **Next.js Framework**: Utilized for server-side rendering, static site generation, and routing.
- **Auth.js Integration**: Provides seamless authentication and authorization with multiple strategies.
- **Credentials Authentication**: Traditional sign-in with email and password.
- **OAuth with GitHub**: GitHub integration for one-click OAuth login.
- **Secure Authentication Flow**: Ensures user data is handled securely with session management.

### Tech Stack:

- **Next.js**: React framework for building full-stack applications.
- **Auth.js**: Authentication solution supporting multiple providers.
- **OAuth**: GitHub sign-in for user-friendly, secure authentication.

## Setup the Project

### Install dependencies.

```bash
npm install
```

### Generate a secret.

```bash
npx auth secret
```

For Github include your credentials in your `.env.local`. For reference please refer `.env.sample`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
