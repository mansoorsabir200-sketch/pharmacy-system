import { db } from "@/drizzle/db";
import { SessionTable } from "@/drizzle/schema";

import crypto from "crypto";
import { cookies } from "next/headers";

export async function hashPassword(password, salt) {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, salt, 64, (error, hash) => {
      if (error) reject(error);
      resolve(hash.toString("hex").normalize());
    });
  });
}

export function generateSalt() {
  return crypto.randomBytes(16).toString("hex").normalize();
}

export async function createUserSessions(user) {
  const sessionId = crypto.randomBytes(512).toString("hex".normalize());

  await db.insert(SessionTable).values({
    sessionId: sessionId,
    userId: user.id,
  });
  const myCookies = await cookies();
  myCookies.set("session-id", sessionId);
}

export async function comparePassword(password, hashedPassword, salt) {
  const originalPassword = await hashPassword(password, salt);
  return crypto.timingSafeEqual(
    Buffer.from(originalPassword),
    Buffer.from(hashedPassword)
  );
}
