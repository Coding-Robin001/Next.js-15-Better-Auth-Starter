"use server";

import { prisma } from "../utils/prisma"; 

export async function addUser(formData: FormData) {
  const email = formData.get("email")?.toString();
  const name = formData.get("name")?.toString();

  if (!email) {
    throw new Error("Email is required");
  }

  await prisma.user.create({
    data: { email, name },
  });
}
