import { useState } from "react";

export default function CommentSection() {
  const [comment, setComment] = useState("");

  const comments = [
    {
      id: 1,
      username: "saurav",
      text: "Amazing project architecture 🔥",
    },
    {
      id: 2,
      username: "developer",
      text: "Production-ready UI looks good.",
    },
  ];

  const handleComment = (e) => {
    e.preventDefault();

    console.log(comment);

    setComment("");
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-5">
        Comments
      </h2>

      <form
        onSubmit={handleComment}
        className="mb-6"
      >
        <textarea
          rows="4"
          value={comment}
          onChange={(e) =>
            setComment(e.target.value)
          }
          placeholder="Write a comment..."
          className="
          w-full
          border
          rounded-xl
          p-4
          outline-none
          focus:ring-2
          focus:ring-orange-400
        "
        />

        <button
          className="
          mt-3
          bg-orange-500
          hover:bg-orange-600
          text-white
          px-5
          py-2
          rounded-lg
          font-semibold
        "
        >
          Add Comment
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((item) => (
          <div
            key={item.id}
            className="
            bg-white
            border
            rounded-xl
            p-4
          "
          >
            <h3 className="font-semibold text-gray-800">
              {item.username}
            </h3>

            <p className="text-gray-600 mt-1">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}