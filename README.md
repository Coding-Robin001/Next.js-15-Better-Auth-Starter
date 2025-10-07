# Next.js 15 + Better Auth Starter

A modern **Next.js 15 starter template** with **Better Auth** authentication (email/password + social logins), **Prisma**, and **Tailwind CSS** — built for rapid SaaS and full-stack app development.  
Includes ready-to-use authentication, protected routes, and a clean project structure so you can focus on building your product, not setting up auth.

---

## 🚀 Features

- 🔐 Better Auth (Email + Social Providers)
- 🧱 Prisma ORM with PostgreSQL or SQLite
- 🎨 Tailwind CSS styling
- ⚙️ Next.js 15 App Router structure
- 🧩 Protected routes and API endpoints
- 🪄 Pre-configured for easy deployment

---

## 🛠️ Setup

### 1. Clone this repo
```bash
git clone https://github.com/yourusername/nextjs-better-auth-starter.git
cd nextjs-better-auth-starter
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Set up environment variables
Create a `.env` file in the root directory and fill in your credentials:

#### For SQLite (default)
```env
DATABASE_URL="file:./dev.db"
BETTER_AUTH_SECRET="your_auth_secret"
```

#### For PostgreSQL / Neon
```env
DATABASE_URL="postgresql://<user>:<password>@<host>/<dbname>?sslmode=require"
BETTER_AUTH_SECRET="your_auth_secret"
BETTER_AUTH_GOOGLE_ID="your_google_client_id"
BETTER_AUTH_GOOGLE_SECRET="your_google_secret"
BETTER_AUTH_GITHUB_ID="your_github_client_id"
BETTER_AUTH_GITHUB_SECRET="your_github_secret"
NEXTAUTH_URL="http://localhost:3000"
```

> 💡 For Neon, always include `?sslmode=require`.

---

### 4. Initialize Prisma
After cloning, you **must** generate the Prisma client:
```bash
npx prisma generate
```

Then migrate the database:
```bash
npx prisma migrate dev
```

(Optional) Open Prisma Studio to explore your database:
```bash
npx prisma studio
```

---

### 5. Start the app
```bash
npm run dev
```

Visit ➡️ [http://localhost:3000](http://localhost:3000)

---

## 🧩 Optional: Switch to PostgreSQL (Neon)

If you started with SQLite but want to switch to Neon (Postgres):

1. **Update provider** in `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

2. **Replace** your `DATABASE_URL` in `.env` with your Neon connection string.

3. **Run**:
   ```bash
   npx prisma migrate dev --name switch-to-postgres
   ```

---

## 🧭 Usage

Use this as your **starter kit** for new SaaS projects or any full-stack app that requires authentication.  
You can easily extend the Prisma schema, connect to your hosted database, and customize the UI.

---

## 📚 Learn More

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Better Auth Documentation](https://better-auth.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Neon PostgreSQL](https://neon.tech)

---

## 🧑‍💻 Author

Built with ❤️ by **[@coding_robin](https://github.com/Coding-Robin001)**

---

## ⚖️ License

MIT License © 2025 [@coding_robin](https://github.com/Coding-Robin001)
