import { eq } from "drizzle-orm";
import db from "../db/index.js";
import { userTable } from "../drizzle/schema.js";

export async function handleAddUser(req, res) {
  const { name, email } = req.body;

  if (!name || name === "") {
    return res.status(404).json({ error: "Name not found" });
  }
  if (!email || email === "") {
    return res.status(404).json({ error: "Email is mandatory" });
  }

  await db
    .insert(userTable)
    .values({ name, email })
    .returning({ id: userTable.id });
  return res.status(200).json({ message: "User inserted successfully" });
}

export async function handleGetAllUsers(req, res) {
  const users = await db.select().from(userTable);
  return res.status(201).json(users);
}

export async function handleGetOneUser(req, res) {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({ error: "Id is required" });
  } else if (isNaN(id)) {
    return res.status(400).json({ error: "ID must be a number" });
  }

  const user = await db.select().from(userTable).where(eq(userTable.id, id));
  return res.status(201).json(user);
}

export async function handleUpdateUser(req, res) {
  const id = req.params.id;
  const { name, email } = req.body;

  if (!id) {
    return res.status(404).json({ error: "ID is required" });
  } else if (isNaN(id)) {
    return res.status(400).json({ error: "ID must be a number" });
  }

  await db.update(userTable).set({ name, email }).where(eq(userTable.id, id));
  return res.status(201).json({ message: `User with ID : ${id} updated` });
}

export async function handleDeleteUser(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(404).json({ error: "ID is required" });
  } else if (isNaN(id)) {
    return res.status(400).json({ error: "ID must be a number" });
  }

  await db.delete(userTable).where(eq(userTable.id, id));

  return res.status(201).json({ message: `User with ID : ${id} deleted` });
}
