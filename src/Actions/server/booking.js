"use server";

import { authOptions } from "@/lib/authOptions";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

const { dbconnect, collection } = require("@/lib/dbconnect");

const bookingsColl = dbconnect(collection.BOOKINGS);

export async function addBookings(bookingData) {
  const newData = {
    ...bookingData,
    status: "pending",
    bookedAt: new Date(),
  };

  const result = await bookingsColl.insertOne(newData);
  return result;
}

export async function myBookings(email) {
  const result = await bookingsColl.find({ email: email }).toArray();
  return result;
}

export async function deleteBookings(id, email) {
  const query = {};
  ((query.email = email), (query._id = new ObjectId(id)));
  const result = await bookingsColl.deleteOne(query);
  return result;
}
