"use server";

import { db } from "@/drizzle/db";
import { SessionTable } from "@/drizzle/schema";
import { cookies } from "next/headers";

export async function getUser() {
  const myCookies = cookies();

  const sessionId = (await myCookies).get("session-id");

  const user = await db.query.SessionTable.findFirst({
    where: eq(SessionTable.sessionId, sessionId),
    with: {
      user: true,
    },
  });

  return user;
}
