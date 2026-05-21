// export default function Skeleton() {

//   return (
//     <div
//       className="
//       bg-white
//       rounded-2xl
//       border
//       p-5
//       animate-pulse
//     "
//     >

//       <div
//         className="
//         h-4
//         bg-gray-200
//         rounded
//         w-1/4
//       "
//       />

//       <div
//         className="
//         h-6
//         bg-gray-200
//         rounded
//         mt-4
//       "
//       />

//       <div
//         className="
//         h-4
//         bg-gray-200
//         rounded
//         mt-3
//       "
//       />

//       <div
//         className="
//         h-4
//         bg-gray-200
//         rounded
//         mt-2
//         w-2/3
//       "
//       />

//     </div>
//   );
// }

export default function Skeleton() {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-5
      animate-pulse
      shadow-sm
    "
    >

      <div className="flex items-center gap-3">

        <div
          className="
          w-12
          h-12
          rounded-full
          bg-gray-200
        "
        />

        <div className="space-y-2">

          <div
            className="
            w-32
            h-4
            bg-gray-200
            rounded
          "
          />

          <div
            className="
            w-20
            h-3
            bg-gray-200
            rounded
          "
          />

        </div>

      </div>

      <div
        className="
        h-6
        bg-gray-200
        rounded
        mt-6
      "
      />

      <div
        className="
        h-5
        bg-gray-200
        rounded
        mt-3
        w-3/4
      "
      />

      <div
        className="
        h-[320px]
        bg-gray-200
        rounded-2xl
        mt-6
      "
      />

    </div>
  );
}