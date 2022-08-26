# ZubaCorp Scraper

### What this does..?

User can search the database of ZubaCorp and save the record of companies to local db.

### How this works..?

- From frontend client search for record.
- Backend API will hit the apis of ZubaCorp.
- Parses the record received.
- Saves the parsed record to db

### Note on getting on board

Project is divided into two main DIRs, namely backend and frontend.
As the name suggests both the folder does there job.

## Frontend

**A Quick note: Frontend is using vite scripts for building and running dev servers for obvious reasons**

> Next Generation Frontend Tooling

- 💡 Instant Server Start
- ⚡️ Lightning Fast HMR
- 🛠️ Rich Features
- 📦 Optimized Build
- 🔩 Universal Plugin Interface

> Available npm/yarn scripts

To start dev server

```bash
yarn dev
```

To Build app

```bash
yarn build
```

To Preview app

```bash
yarn preview
```

> Libraries used

- [react](https://reactjs.org/)
- [AntD](https://ant.design/)
- [axios](https://github.com/axios/axios)
- [react-use](https://github.com/streamich/react-use)

## Backend

Backend is built on express.js, with Prisma for ORM

> Available npm/yarn scripts

To start dev server

```bash
yarn dev
```

To start app for production

```bash
yarn start
```

> Libraries used

- [express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
