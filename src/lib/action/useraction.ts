"use server";

import clientPromise from "../mongodb";


export const createReview = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("nextauth");
    const bankCollection = db.collection("kabylospizzaReviews");

   
    const reviews = await bankCollection.find({}).toArray();

    const formattedReviews = reviews.map(review => ({
      ...review,
      _id: review._id.toString(), 
    }));

    return formattedReviews;
  } catch (error) {
    console.log("Error", error);
    return [];
  }
};
