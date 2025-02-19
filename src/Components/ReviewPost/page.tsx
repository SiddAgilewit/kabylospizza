"use client";

import { useState } from "react";


export const PostReview = () => {
const [info, setInfo] = useState({ name: "", rating: "5", review: "" });

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Review Submitted:", info);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Post a Review</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded"
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
          />
          <select
            className="w-full p-2 border rounded"
            value={info.rating}
            onChange={(e) => setInfo({ ...info, rating: e.target.value })}
          >
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>
          <textarea
            placeholder="Your Review"
            className="w-full p-2 border rounded"
            value={info.review}
            onChange={(e) => setInfo({ ...info, review: e.target.value })}
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};
