// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// import api from "../../services/api";
// import { useAuth } from "../../context/AuthContext";

// export default function LoginPage() {

//   const navigate = useNavigate();

//   const { login } = useAuth();

//   const [email, setEmail] =
//     useState("");

//   const [password, setPassword] =
//     useState("");

//   const [loading, setLoading] =
//     useState(false);

//   const handleLogin = async (e) => {

//   e.preventDefault();

//   try {

//     setLoading(true);

//     const response =
//       await api.post(
//         "/auth/login",
//         {
//           email,
//           password,
//         }
//       );

//     const token =
//       response.data.data.token;

//     login(token);

//     toast.success(
//       "Login successful"
//     );

//     navigate("/");

//   } catch (error) {

//     toast.error(
//       error.response?.data?.message
//       || "Login failed"
//     );

//   } finally {

//     setLoading(false);
//   }
// };
//   return (
//     <div
//       className="
//       min-h-screen
//       flex
//       items-center
//       justify-center
//       bg-gradient-to-br
//       from-blue-100
//       via-white
//       to-purple-100
//       px-4
//     "
//     >

//       <div
//         className="
//         w-full
//         max-w-md
//         bg-white
//         rounded-3xl
//         shadow-2xl
//         p-8
//       "
//       >

//         <div className="text-center mb-8">

//           <h1
//             className="
//             text-4xl
//             font-bold
//             text-gray-800
//           "
//           >
//             Welcome Back 👋
//           </h1>

//           <p
//             className="
//             text-gray-500
//             mt-2
//           "
//           >
//             Login to your Reddit Clone
//           </p>

//         </div>

//         <form
//           onSubmit={handleLogin}
//           className="space-y-5"
//         >

//           <div>

//             <label
//               className="
//               text-sm
//               font-medium
//               text-gray-700
//             "
//             >
//               Email
//             </label>

//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) =>
//                 setEmail(e.target.value)
//               }
//               className="
//               w-full
//               mt-2
//               p-3
//               border
//               rounded-xl
//               outline-none
//               focus:ring-2
//               focus:ring-blue-500
//             "
//               required
//             />

//           </div>

//           <div>

//             <label
//               className="
//               text-sm
//               font-medium
//               text-gray-700
//             "
//             >
//               Password
//             </label>

//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) =>
//                 setPassword(e.target.value)
//               }
//               className="
//               w-full
//               mt-2
//               p-3
//               border
//               rounded-xl
//               outline-none
//               focus:ring-2
//               focus:ring-blue-500
//             "
//               required
//             />

//           </div>

//           <button
//             disabled={loading}
//             className="
//             w-full
//             bg-blue-600
//             hover:bg-blue-700
//             transition
//             text-white
//             py-3
//             rounded-xl
//             font-semibold
//           "
//           >
//             {
//               loading
//                 ? "Logging in..."
//                 : "Login"
//             }
//           </button>

//         </form>

//         <p
//           className="
//           text-center
//           text-gray-600
//           mt-6
//         "
//         >
//           Don’t have an account?

//           <Link
//             to="/signup"
//             className="
//             text-blue-600
//             font-semibold
//             ml-1
//           "
//           >
//             Signup
//           </Link>

//         </p>

//       </div>

//     </div>
//   );
// }
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../../services/api";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await api.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      const token =
        response.data.data.token;

      login(token);

      toast.success(
        "Login successful ✅"
      );

      navigate("/");

    } catch (error) {

      toast.error(
        error.response?.data?.message
        || "Login failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-slate-900
      via-slate-800
      to-slate-900
      px-4
    "
    >

      <div
        className="
        w-full
        max-w-md
        bg-slate-800/90
        backdrop-blur-lg
        border
        border-slate-700
        rounded-3xl
        shadow-2xl
        p-8
      "
      >

        <div className="text-center mb-8">

          <h1
            className="
            text-4xl
            font-bold
            text-white
          "
          >
            Welcome Back 👋
          </h1>

          <p
            className="
            text-slate-400
            mt-3
          "
          >
            Login to continue your journey
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <div>

            <label
              className="
              text-sm
              font-medium
              text-slate-300
            "
            >
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
              w-full
              mt-2
              px-4
              py-3
              bg-white
              text-black
              placeholder-gray-400
              border
              border-gray-300
              rounded-xl
              outline-none
              focus:ring-2
              focus:ring-blue-500
              transition
            "
              required
            />

          </div>

          <div>

            <label
              className="
              text-sm
              font-medium
              text-slate-300
            "
            >
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="
              w-full
              mt-2
              px-4
              py-3
              bg-white
              text-black
              placeholder-gray-400
              border
              border-gray-300
              rounded-xl
              outline-none
              focus:ring-2
              focus:ring-blue-500
              transition
            "
              required
            />

          </div>

          <button
            disabled={loading}
            className="
            w-full
            bg-blue-600
            hover:bg-blue-700
            transition
            text-white
            py-3
            rounded-xl
            font-semibold
            shadow-lg
          "
          >

            {
              loading
                ? "Logging in..."
                : "Login"
            }

          </button>

        </form>

        <p
          className="
          text-center
          text-slate-400
          mt-6
        "
        >
          Don’t have an account?

          <Link
            to="/signup"
            className="
            text-blue-400
            font-semibold
            ml-1
            hover:text-blue-300
          "
          >
            Signup
          </Link>

        </p>

      </div>

    </div>
  );
}