"use server";
import { collection, dbconnect } from "@/lib/dbconnect";
import bcrypt from "bcryptjs";

export async function postUser(payload) {
  const { name, email, password } = payload;

  const isUserExist = await dbconnect(collection.USERS).findOne({
    email: email,
  });

  if (isUserExist) {
    return {
      acknowledged: false,
    };
  }

  const newUser = {
    email: email,
    name: name,
    password: await bcrypt.hash(password, 14),
    provider: "credentail",
    role: "user",
  };

  const result = await dbconnect(collection.USERS).insertOne(newUser);
  console.log(result);
  return {
    ...result,
    insertedId: result.insertedId?.toString(),
  };
}

export async function loginUser(payload) {
  const { email, password } = payload;

  if (!email || !password) {
    return null;
  }

  const user = await dbconnect(collection.USERS).findOne({ email });
  if (!user) {
    return null;
  }

  const ismatched = await bcrypt.compare(password, user?.password);
  if (ismatched) {
    return user;
  }

  return null;
}
