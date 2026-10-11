# Nestar — web client

Next.js frontend for **Nestar**, a real-estate marketplace: property search and detail pages, agent profiles, a community board, user accounts and an admin panel. It talks to a NestJS GraphQL API.

## Stack

- **Framework:** Next.js 14 (pages router), React, TypeScript
- **Data:** Apollo Client (queries, mutations, file uploads, WebSocket link)
- **UI:** MUI, SCSS, Swiper
- **i18n:** next-i18next — English, Korean, Russian
- **Editor:** Toast UI Editor for community articles

## Pages

| Route | Purpose |
|---|---|
| `/` | Home: top, popular and trending properties, top agents, community boards |
| `/property`, `/property/detail` | Property search with filters, property detail |
| `/agent`, `/agent/detail` | Agent directory and agent profile |
| `/community`, `/community/detail` | Community articles and comments |
| `/mypage` | Own properties, profile, article writing |
| `/member` | Public member profile |
| `/account/join` | Sign up and log in |
| `/cs` | Customer support |
| `/_admin` | Admin panel: users, properties, community, support (FAQ, notices, inquiries) |

## Project structure

```
pages/        routes
libs/         components, hooks, auth, types, enums
apollo/       Apollo Client setup and GraphQL operations (user, admin)
scss/         styles
public/       static assets and locale files
```

## Getting started

```bash
yarn install
```

Create `.env` in the project root:

```
REACT_APP_API_URL=http://localhost:3007
REACT_APP_API_GRAPHQL_URL=http://localhost:3007/graphql
REACT_APP_API_WS=ws://localhost:3007
```

```bash
yarn dev
```

The app runs on http://localhost:3000.
