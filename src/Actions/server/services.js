"use server";

import { ObjectId } from "mongodb";

const { dbconnect, collection } = require("@/lib/dbconnect");

const servicesColl = dbconnect(collection.SERVICES);

export async function getAllServices() {
  const result = await servicesColl.find().toArray();
  //   console.log(result);
  return result;
}

export async function getService(id) {
  const result = await servicesColl.findOne({ _id: new ObjectId(id) });
  return result;
}
