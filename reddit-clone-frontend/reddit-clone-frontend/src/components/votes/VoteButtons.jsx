// import { useState } from "react";

// import {
//   ChevronUp,
//   ChevronDown,
// } from "lucide-react";

// export default function VoteButtons() {

//   const [votes, setVotes] =
//     useState(120);

//   const handleUpvote = () => {
//     setVotes((prev) => prev + 1);
//   };

//   const handleDownvote = () => {
//     setVotes((prev) => prev - 1);
//   };

//   return (
//     <div
//       className="
//       flex
//       flex-col
//       items-center
//       gap-1
//       bg-gray-100
//       rounded-xl
//       px-3
//       py-2
//       w-fit
//     "
//     >
//       <button
//         onClick={handleUpvote}
//         className="hover:text-orange-500"
//       >
//         <ChevronUp />
//       </button>

//       <span className="font-bold">
//         {votes}
//       </span>

//       <button
//         onClick={handleDownvote}
//         className="hover:text-blue-500"
//       >
//         <ChevronDown />
//       </button>
//     </div>
//   );
// }


import { useState } from "react";

import {
  ChevronUp,
  ChevronDown,
} from "lucide-react";

export default function VoteButtons() {

  const [votes, setVotes] =
    useState(120);

  const handleUpvote = () => {
    setVotes((prev) => prev + 1);
  };

  const handleDownvote = () => {
    setVotes((prev) => prev - 1);
  };

  return (
    <div
      className="
      flex
      flex-col
      items-center
      gap-1
      bg-gray-100
      rounded-xl
      px-3
      py-2
      w-fit
    "
    >

      <button
        onClick={handleUpvote}
        className="
        hover:text-orange-500
      "
      >
        <ChevronUp />
      </button>

      <span
        className="
        font-bold
        text-gray-800
      "
      >
        {votes}
      </span>

      <button
        onClick={handleDownvote}
        className="
        hover:text-blue-500
      "
      >
        <ChevronDown />
      </button>

    </div>
  );
}