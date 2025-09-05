"use client";
import { useState } from "react";

export default function MessageCard({ message }) {
  const [showFullMessage, setShowFullMessage] = useState(false);

  return (
    <div className="max-w-[85%] text-sm font-semibold">
      <p className={showFullMessage ? "whitespace-normal" : "truncate"}>
        {message}
      </p>

      <button
        onClick={() => setShowFullMessage(!showFullMessage)}
        className="text-blue-500 text-xs font-medium  hover:underline"
      >
        {showFullMessage ? "Show less" : "Show more"}
      </button>
    </div>
  );
}
