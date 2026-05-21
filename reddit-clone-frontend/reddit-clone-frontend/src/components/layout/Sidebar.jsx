
// import { Link, useLocation } from "react-router-dom";

// import {
//   Home,
//   Users,
//   PlusSquare,
//   User,
//   Flame,
// } from "lucide-react";

// const menuItems = [
//   {
//     title: "Home",
//     icon: Home,
//     path: "/",
//   },
//   {
//     title: "Communities",
//     icon: Users,
//     path: "/communities",
//   },
//   {
//     title: "Create Post",
//     icon: PlusSquare,
//     path: "/create-post",
//   },
//   {
//     title: "Profile",
//     icon: User,
//     path: "/profile",
//   },
// ];

// export default function Sidebar() {

//   const location = useLocation();

//   return (
//     <aside
//       className="
//       hidden
//       lg:flex
//       flex-col
//       w-64
//       min-h-screen
//       bg-white
//       border-r
//       border-gray-200
//       sticky
//       top-0
//       p-5
//     "
//     >

//       <Link
//         to="/"
//         className="flex items-center gap-2 mb-8"
//       >
//         <Flame
//           className="text-orange-500"
//           size={28}
//         />

//         <h1
//           className="
//           text-2xl
//           font-bold
//           text-gray-800
//         "
//         >
//           Reddit Clone
//         </h1>

//       </Link>

//       <nav className="space-y-2">

//         {menuItems.map((item) => {

//           const Icon = item.icon;

//           const isActive =
//             location.pathname === item.path;

//           return (
//             <Link
//               key={item.title}
//               to={item.path}
//               className={`
//                 flex
//                 items-center
//                 gap-3
//                 px-4
//                 py-3
//                 rounded-xl
//                 transition-all
//                 duration-200
//                 font-medium
//                 ${
//                   isActive
//                     ? "bg-orange-100 text-orange-600"
//                     : "hover:bg-gray-100 text-gray-700"
//                 }
//               `}
//             >

//               <Icon size={20} />

//               {item.title}

//             </Link>
//           );
//         })}

//       </nav>

//     </aside>
//   );
// }

import {
  Home,
  Flame,
  Users,
  Bookmark,
  Settings,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Home",
    icon: Home,
    path: "/",
  },
  {
    title: "Popular",
    icon: Flame,
    path: "/popular",
  },
  {
    title: "Communities",
    icon: Users,
    path: "/communities",
  },
  {
    title: "Saved",
    icon: Bookmark,
    path: "/saved",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {

  const location = useLocation();

  return (
    <aside
      className="
      hidden
      lg:flex
      flex-col
      w-64
      min-h-screen
      sticky
      top-16
      p-6
    "
    >
      <div className="space-y-2">

        {
          menuItems.map((item) => {

            const Icon = item.icon;

            const active =
              location.pathname === item.path;

            return (
              <Link
                key={item.title}
                to={item.path}
                className={`
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-2xl
                  font-medium
                  transition
                  ${
                    active
                      ? "bg-orange-500 text-white"
                      : "hover:bg-white"
                  }
                `}
              >
                <Icon size={20} />
                {item.title}
              </Link>
            );
          })
        }

      </div>
    </aside>
  );
}