// // import VoteButtons from "../votes/VoteButtons";

// // import {
// //   MessageCircle,
// //   Share2,
// //   Bookmark,
// // } from "lucide-react";

// // export default function PostCard({
// //   post,
// // }) {

// //   return (
// //     <div
// //       className="
// //       bg-white
// //       border
// //       rounded-2xl
// //       p-5
// //       shadow-sm
// //       hover:shadow-md
// //       transition-all
// //       flex
// //       gap-4
// //     "
// //     >

// //       {/* LEFT */}

// //       <VoteButtons />

// //       {/* RIGHT */}

// //       <div className="flex-1">

// //         <div
// //           className="
// //           flex
// //           items-center
// //           gap-2
// //           text-sm
// //           text-gray-500
// //         "
// //         >

// //           <span>
// //             r/{post.communityName || "programming"}
// //           </span>

// //           <span>•</span>

// //           <span>
// //             Posted by @{post.username || "saurav"}
// //           </span>

// //         </div>

// //         <h2
// //           className="
// //           text-2xl
// //           font-bold
// //           mt-3
// //           text-gray-800
// //         "
// //         >
// //           {post.title}
// //         </h2>

// //         <p
// //           className="
// //           mt-3
// //           text-gray-600
// //           leading-relaxed
// //         "
// //         >
// //           {post.content}
// //         </p>

// //         {
// //           post.imageUrl && (
// //             <img
// //               src={post.imageUrl}
// //               alt="post"
// //               className="
// //               mt-4
// //               rounded-xl
// //               max-h-96
// //               w-full
// //               object-cover
// //             "
// //             />
// //           )
// //         }

// //         {/* ACTIONS */}

// //         <div
// //           className="
// //           flex
// //           items-center
// //           gap-6
// //           mt-5
// //           text-gray-500
// //         "
// //         >

// //           <button
// //             className="
// //             flex
// //             items-center
// //             gap-2
// //             hover:text-orange-500
// //           "
// //           >
// //             <MessageCircle size={18} />
// //             Comment
// //           </button>

// //           <button
// //             className="
// //             flex
// //             items-center
// //             gap-2
// //             hover:text-blue-500
// //           "
// //           >
// //             <Share2 size={18} />
// //             Share
// //           </button>

// //           <button
// //             className="
// //             flex
// //             items-center
// //             gap-2
// //             hover:text-green-500
// //           "
// //           >
// //             <Bookmark size={18} />
// //             Save
// //           </button>

// //         </div>

// //       </div>

// //     </div>
// //   );
// // }

// {
//   post.imageUrl && (
//     <img
//       src={post.imageUrl}
//       alt="post"
//       className="
//       w-full
//       rounded-2xl
//       mt-5
//       max-h-[500px]
//       object-cover
//       border
//     "
//     />
//   )
// }

import {
  ArrowBigUp,
  MessageCircle,
  Share2,
} from "lucide-react";

export default function PostCard({
  post,
}) {

  return (

    <div
      className="
      bg-white
      rounded-3xl
      overflow-hidden
      border
      hover:shadow-xl
      transition-all
      duration-300
    "
    >

      {/* TOP */}

      <div className="p-5">

        <div className="flex items-center gap-3">

          <div
            className="
            w-12
            h-12
            rounded-full
            bg-gradient-to-r
            from-orange-500
            to-pink-500
          "
          />

          <div>

            <h3 className="font-bold text-gray-800">
              {post.authorName || "Anonymous"}
            </h3>

            <p className="text-sm text-gray-500">
              r/{post.communityName}
            </p>

          </div>

        </div>

        <h2
          className="
          text-2xl
          font-bold
          mt-5
          text-gray-900
        "
        >
          {post.title}
        </h2>

        <p
          className="
          text-gray-600
          mt-3
          leading-relaxed
        "
        >
          {post.content}
        </p>

      </div>

      {/* IMAGE */}

      {
        post.imageUrl && (

          <img
            src={post.imageUrl}
            alt=""
            className="
            w-full
            max-h-[500px]
            object-cover
          "
          />

        )
      }

      {/* FOOTER */}

      <div
        className="
        flex
        items-center
        gap-6
        p-5
        border-t
      "
      >

        <button
          className="
          flex
          items-center
          gap-2
          text-gray-600
          hover:text-orange-500
        "
        >
          <ArrowBigUp size={22} />
          {post.voteCount || 0}
        </button>

        <button
          className="
          flex
          items-center
          gap-2
          text-gray-600
          hover:text-blue-500
        "
        >
          <MessageCircle size={20} />
          {post.commentCount || 0}
        </button>

        <button
          className="
          flex
          items-center
          gap-2
          text-gray-600
          hover:text-green-500
        "
        >
          <Share2 size={20} />
          Share
        </button>

      </div>

    </div>
  );
}