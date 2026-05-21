
// import { Link } from "react-router-dom";

// import {
//   Bell,
//   Search,
// } from "lucide-react";

// import { useAuth } from "../../context/AuthContext";

// export default function Navbar() {

//   const {
//     token,
//     logout,
//   } = useAuth();

//   return (
//     <nav
//       className="
//       sticky
//       top-0
//       z-50
//       bg-white/90
//       backdrop-blur-lg
//       border-b
//     "
//     >

//       <div
//         className="
//         max-w-7xl
//         mx-auto
//         px-6
//         h-16
//         flex
//         items-center
//         justify-between
//       "
//       >

//         {/* LOGO */}

//         <Link
//           to="/"
//           className="
//           text-2xl
//           font-extrabold
//           text-orange-500
//         "
//         >
//           RedditClone 🚀
//         </Link>

//         {/* SEARCH */}

//         <div
//           className="
//           hidden
//           md:flex
//           items-center
//           bg-gray-100
//           px-4
//           py-2
//           rounded-xl
//           w-96
//         "
//         >

//           <Search
//             size={18}
//             className="text-gray-500"
//           />

//           <input
//             type="text"
//             placeholder="Search communities..."
//             className="
//             bg-transparent
//             ml-3
//             flex-1
//             outline-none
//           "
//           />

//         </div>

//         {/* RIGHT */}

//         <div
//           className="
//           flex
//           items-center
//           gap-4
//         "
//         >

//           {
//             token ? (
//               <>

//                 <button
//                   className="
//                   p-2
//                   rounded-xl
//                   hover:bg-gray-100
//                 "
//                 >
//                   <Bell size={20} />
//                 </button>

//                 <Link
//                   to="/create-post"
//                   className="
//                   bg-orange-500
//                   hover:bg-orange-600
//                   text-white
//                   px-5
//                   py-2
//                   rounded-xl
//                   font-semibold
//                 "
//                 >
//                   Create Post
//                 </Link>

//                 <button
//                   onClick={logout}
//                   className="
//                   bg-red-500
//                   hover:bg-red-600
//                   text-white
//                   px-5
//                   py-2
//                   rounded-xl
//                 "
//                 >
//                   Logout
//                 </button>

//               </>
//             ) : (
//               <>

//                 <Link
//                   to="/login"
//                   className="
//                   text-gray-700
//                   hover:text-orange-500
//                 "
//                 >
//                   Login
//                 </Link>

//                 <Link
//                   to="/signup"
//                   className="
//                   bg-orange-500
//                   hover:bg-orange-600
//                   text-white
//                   px-5
//                   py-2
//                   rounded-xl
//                 "
//                 >
//                   Signup
//                 </Link>

//               </>
//             )
//           }

//         </div>

//       </div>

//     </nav>
//   );
// }

import { Link } from "react-router-dom";
import {
  Bell,
  Search,
  Plus,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

export default function Navbar() {

  const { token, logout } = useAuth();

  return (
    <header
      className="
      sticky
      top-0
      z-50
      bg-white/80
      backdrop-blur-xl
      border-b
    "
    >
      <div
        className="
        h-16
        max-w-7xl
        mx-auto
        px-6
        flex
        items-center
        justify-between
      "
      >

        {/* LOGO */}

        <Link
          to="/"
          className="
          text-2xl
          font-black
          text-orange-500
          tracking-tight
        "
        >
          DevHub 🚀
        </Link>

        {/* SEARCH */}

        <div
          className="
          hidden
          md:flex
          items-center
          bg-gray-100
          rounded-full
          px-4
          py-2
          w-[420px]
        "
        >
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search posts..."
            className="
            bg-transparent
            ml-3
            w-full
            outline-none
            text-sm
          "
          />
        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-4">

          {
            token ? (
              <>
                <Link
                  to="/create-post"
                  className="
                  flex
                  items-center
                  gap-2
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  px-4
                  py-2
                  rounded-full
                  font-medium
                  transition
                "
                >
                  <Plus size={18} />
                  Create
                </Link>

                <button
                  className="
                  p-2
                  rounded-full
                  hover:bg-gray-100
                "
                >
                  <Bell size={20} />
                </button>

                <button
                  onClick={logout}
                  className="
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  px-4
                  py-2
                  rounded-full
                "
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="
                  font-medium
                  text-gray-700
                "
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="
                  bg-orange-500
                  hover:bg-orange-600
                  text-white
                  px-5
                  py-2
                  rounded-full
                  font-medium
                "
                >
                  Signup
                </Link>
              </>
            )
          }

        </div>

      </div>
    </header>
  );
}