import { prisma } from "./utils/prisma";
import { addUser } from "./api/action";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <main className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">Users</h1>

      {/* Add User Form */}
      <form action={addUser} className="space-y-3">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border px-2 py-1 rounded w-full"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name (optional)"
          className="border px-2 py-1 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </form>

      {/* List Users */}
      <ul className="space-y-2 bg-red">
        {users.map((u) => (
          <li key={u.id} className="border p-2 rounded">
            <strong>{u.email}</strong> {u.name && `(${u.name})`}
          </li>
        ))}
      </ul>
    </main>
  );
}
