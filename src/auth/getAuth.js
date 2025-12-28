import { db } from "@/drizzle/db";
import { SessionTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";

export async function getUser() {
  const Cookies = await cookies();

  const sessionId = Cookies.get("session-id")?.value;

  const currentUser = await db.query.SessionTable.findFirst({
    where: eq(SessionTable.sessionId, sessionId),
    with: { user: true },
  });

  return currentUser;
}
