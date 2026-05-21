// import Navbar from "../components/layout/Navbar";
// import Sidebar from "../components/layout/Sidebar";
// import RightSidebar from "../components/layout/RightSidebar";

// export default function MainLayout({
//   children,
// }) {

//   return (
//     <div className="min-h-screen bg-gray-100">

//       <Navbar />

//       <div
//         className="
//         max-w-7xl
//         mx-auto
//         flex
//       "
//       >

//         <Sidebar />

//         <main
//           className="
//           flex-1
//           p-5
//           min-h-screen
//         "
//         >
//           {children}
//         </main>

//         <RightSidebar />

//       </div>

//     </div>
//   );
// }
import Navbar from "../components/layout/Navbar";

import Sidebar from "../components/layout/Sidebar";

import RightSidebar
from "../components/layout/RightSidebar";

export default function MainLayout({
  children,
}) {

  return (

    <div className="min-h-screen bg-[#f6f7fb]">

      <Navbar />

      <div
        className="
        max-w-[1600px]
        mx-auto
        flex
        gap-6
        px-4
        pt-6
      "
      >

        <Sidebar />

        <main
          className="
          flex-1
          max-w-3xl
          mx-auto
        "
        >
          {children}
        </main>

        <RightSidebar />

      </div>

    </div>
  );
}