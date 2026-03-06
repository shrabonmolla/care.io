"use server";

const { dbconnect, collection } = require("@/lib/dbconnect");

const servicesColl = dbconnect(collection.SERVICES);

export async function getAllServices() {
  const result = await servicesColl.find().toArray();
  //   console.log(result);
  return result;
}
