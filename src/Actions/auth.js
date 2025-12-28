"use server";
import {
  comparePassword,
  createUserSessions,
  generateSalt,
  hashPassword,
} from "@/auth/hashPassword";
import { db } from "@/drizzle/db";
import { SessionTable, UserTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signeUP(data) {
  const existingUser = await db.query.UserTable.findFirst({
    where: eq(UserTable.email, data.email),
  });
  if (existingUser) {
    return " this email is  already exists";
  }
  // ------------

  // --------
  const salt = generateSalt();

  const hashedPassword = await hashPassword(data.password, salt);

  const [newUser] = await db
    .insert(UserTable)
    .values({
      name: data.name,
      email: data.email,
      password: hashedPassword,
      salt: salt,
    })
    .returning();

  await createUserSessions(newUser);

  redirect("/");
}

export async function signIn(data) {
  const existingUser = await db.query.UserTable.findFirst({
    where: eq(UserTable.email, data.email),
  });
  if (existingUser == null) {
    return " this email  Fals  ";
  }
  const isCorrectPasword = await comparePassword(
    data.password,
    existingUser.password,
    existingUser.salt
  );

  if (!isCorrectPasword) {
    return "password is incoreect";
  }
  await createUserSessions(existingUser);

  redirect("/dashboard");
}

export async function logout() {
  const myCookies = await cookies();
  const sessionId = myCookies.get("session-id")?.value;

  if (sessionId == null) {
    return;
  }
  await db.delete(SessionTable).where(eq(SessionTable.sessionId, sessionId));

  myCookies.delete("session-id");

  redirect("/");
}
