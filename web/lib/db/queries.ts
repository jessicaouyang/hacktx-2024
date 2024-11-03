"use server";

import { desc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { messageTable } from "@/lib/db/schema";
import { Message } from "ai/react";

export async function getMessages(user_id: string): Promise<Message[]>{
  return await db
    .select({
      id: messageTable.id,
      role: messageTable.role,
      content: messageTable.content,
      createdAt: messageTable.date,
    })
    .from(messageTable)
    .where(eq(messageTable.user_id, user_id))
    .orderBy(messageTable.date);
}

export async function addMessage(message: Message, user_id: string) {
  await db.insert(messageTable).values({
    id: message.id,
    user_id: user_id,
    role: message.role,
    content: message.content,
    date: message.createdAt!,
  });
}

export async function clearMessages(user_id: string) {
  await db.delete(messageTable).where(eq(messageTable.user_id, user_id));
}
