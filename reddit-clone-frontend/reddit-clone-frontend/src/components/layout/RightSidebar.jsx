
// export default function RightSidebar() {

//   return (
//     <aside
//       className="
//       hidden
//       xl:block
//       w-80
//       p-5
//       space-y-5
//     "
//     >

//       <div
//         className="
//         bg-white
//         rounded-2xl
//         border
//         p-5
//         shadow-sm
//       "
//       >

//         <h2
//           className="
//           text-xl
//           font-bold
//           mb-4
//         "
//         >
//           Trending Communities 🔥
//         </h2>

//         <div className="space-y-4">

//           <div className="flex justify-between">
//             <span>r/reactjs</span>
//             <span className="text-gray-500">
//               120k
//             </span>
//           </div>

//           <div className="flex justify-between">
//             <span>r/javascript</span>
//             <span className="text-gray-500">
//               95k
//             </span>
//           </div>

//           <div className="flex justify-between">
//             <span>r/springboot</span>
//             <span className="text-gray-500">
//               80k
//             </span>
//           </div>

//         </div>

//       </div>

//       <div
//         className="
//         bg-gradient-to-r
//         from-orange-500
//         to-red-500
//         rounded-2xl
//         p-5
//         text-white
//       "
//       >

//         <h2
//           className="
//           text-xl
//           font-bold
//         "
//         >
//           Premium Features 🚀
//         </h2>

//         <p className="mt-3 text-orange-100">
//           Unlock analytics, AI summaries,
//           and exclusive communities.
//         </p>

//       </div>

//     </aside>
//   );
// }

export default function RightSidebar() {
  return (
    <aside
      className="
      hidden
      xl:block
      w-80
      p-6
      space-y-5
    "
    >

      {/* TRENDING */}

      <div
        className="
        bg-white
        rounded-3xl
        p-5
        shadow-sm
      "
      >
        <h2 className="font-bold text-lg mb-4">
          Trending Communities 🔥
        </h2>

        <div className="space-y-4">

          <div>
            <p className="font-semibold">
              r/reactjs
            </p>
            <span className="text-sm text-gray-500">
              120k members
            </span>
          </div>

          <div>
            <p className="font-semibold">
              r/springboot
            </p>
            <span className="text-sm text-gray-500">
              80k members
            </span>
          </div>

          <div>
            <p className="font-semibold">
              r/javascript
            </p>
            <span className="text-sm text-gray-500">
              200k members
            </span>
          </div>

        </div>
      </div>

      {/* RULES */}

      <div
        className="
        bg-white
        rounded-3xl
        p-5
        shadow-sm
      "
      >
        <h2 className="font-bold text-lg mb-4">
          Platform Rules 📘
        </h2>

        <ul className="space-y-3 text-sm text-gray-600">
          <li>• Be respectful</li>
          <li>• No spam</li>
          <li>• No hate speech</li>
          <li>• Share quality content</li>
        </ul>
      </div>

    </aside>
  );
}