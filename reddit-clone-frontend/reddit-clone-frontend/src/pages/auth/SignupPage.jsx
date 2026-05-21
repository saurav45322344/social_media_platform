// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { useAuth } from "../../context/AuthContext";
// import api from "../../services/api";

// export default function SignupPage() {

//   const navigate = useNavigate();

//   const [loading, setLoading] =
//     useState(false);

//   const [formData, setFormData] =
//     useState({
//       username: "",
//       email: "",
//       password: "",
//     });

//   const handleChange = (e) => {

//     setFormData({
//       ...formData,
//       [e.target.name]:
//         e.target.value,
//     });
//   };

//   const handleSignup = async (e) => {

//   e.preventDefault();

//   try {

//     setLoading(true);

//     const response =
//       await api.post(
//         "/auth/signup",
//         formData
//       );

//     const token =
//       response.data.data.token;

//     login(token);

//     toast.success(
//       "Account created successfully"
//     );

//     navigate("/");

//   } catch (error) {

//     toast.error(
//       error.response?.data?.message
//       || "Signup failed"
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
//       from-purple-100
//       via-white
//       to-blue-100
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
//             Create Account 🚀
//           </h1>

//           <p
//             className="
//             text-gray-500
//             mt-2
//           "
//           >
//             Join the Reddit Clone community
//           </p>

//         </div>

//         <form
//           onSubmit={handleSignup}
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
//               Username
//             </label>

//             <input
//               type="text"
//               name="username"
//               placeholder="Enter username"
//               onChange={handleChange}
//               className="
//               w-full
//               mt-2
//               p-3
//               border
//               rounded-xl
//               outline-none
//               focus:ring-2
//               focus:ring-purple-500
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
//               Email
//             </label>

//             <input
//               type="email"
//               name="email"
//               placeholder="Enter email"
//               onChange={handleChange}
//               className="
//               w-full
//               mt-2
//               p-3
//               border
//               rounded-xl
//               outline-none
//               focus:ring-2
//               focus:ring-purple-500
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
//               name="password"
//               placeholder="Enter password"
//               onChange={handleChange}
//               className="
//               w-full
//               mt-2
//               p-3
//               border
//               rounded-xl
//               outline-none
//               focus:ring-2
//               focus:ring-purple-500
//             "
//               required
//             />

//           </div>

//           <button
//             disabled={loading}
//             className="
//             w-full
//             bg-purple-600
//             hover:bg-purple-700
//             transition
//             text-white
//             py-3
//             rounded-xl
//             font-semibold
//           "
//           >
//             {
//               loading
//                 ? "Creating account..."
//                 : "Signup"
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
//           Already have an account?

//           <Link
//             to="/login"
//             className="
//             text-purple-600
//             font-semibold
//             ml-1
//           "
//           >
//             Login
//           </Link>

//         </p>

//       </div>

//     </div>
//   );
// }


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { useAuth } from "../../context/AuthContext";
import api from "../../services/api";

export default function SignupPage() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      username: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSignup = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response =
        await api.post(
          "/auth/signup",
          formData
        );

      const token =
        response.data.data.token;

      login(token);

      toast.success(
        "Account created successfully 🚀"
      );

      navigate("/");

    } catch (error) {

      toast.error(
        error.response?.data?.message
        || "Signup failed"
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
      via-purple-950
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
            Create Account 🚀
          </h1>

          <p
            className="
            text-slate-400
            mt-3
          "
          >
            Join the developer community
          </p>

        </div>

        <form
          onSubmit={handleSignup}
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
              Username
            </label>

            <input
              type="text"
              name="username"
              placeholder="Enter username"
              onChange={handleChange}
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
              focus:ring-purple-500
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
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
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
              focus:ring-purple-500
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
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
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
              focus:ring-purple-500
              transition
            "
              required
            />

          </div>

          <button
            disabled={loading}
            className="
            w-full
            bg-purple-600
            hover:bg-purple-700
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
                ? "Creating account..."
                : "Signup"
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
          Already have an account?

          <Link
            to="/login"
            className="
            text-purple-400
            font-semibold
            ml-1
            hover:text-purple-300
          "
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}