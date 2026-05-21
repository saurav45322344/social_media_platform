
// import {
//   Routes,
//   Route,
// } from "react-router-dom";

// import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/auth/LoginPage";
// import SignupPage from "./pages/auth/SignupPage";

// import Navbar from "./components/layout/Navbar";

// export default function App() {

//   return (
//     <div className="min-h-screen bg-gray-100">

//       <Navbar />

//       <Routes>

//         <Route
//           path="/"
//           element={<HomePage />}
//         />

//         <Route
//           path="/login"
//           element={<LoginPage />}
//         />

//         <Route
//           path="/signup"
//           element={<SignupPage />}
//         />

//       </Routes>

//     </div>
//   );
// }


import {
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import ProtectedRoute from "./routes/ProtectedRoute";

import HomePage from "./pages/HomePage";

import CommunitiesPage from "./pages/CommunitiesPage";

import CreateCommunityPage from "./pages/CreateCommunityPage";

import CreatePostPage from "./pages/CreatePostPage";

import ProfilePage from "./pages/ProfilePage";

import LoginPage from "./pages/auth/LoginPage";

import SignupPage from "./pages/auth/SignupPage";

export default function App() {

  return (
    <Routes>

      {/* PUBLIC */}

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="/signup"
        element={<SignupPage />}
      />

      {/* MAIN */}

      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />

      <Route
        path="/communities"
        element={
          <MainLayout>
            <CommunitiesPage />
          </MainLayout>
        }
      />

      {/* PROTECTED */}

      <Route
        path="/create-post"
        element={
          <ProtectedRoute>

            <MainLayout>
              <CreatePostPage />
            </MainLayout>

          </ProtectedRoute>
        }
      />

      <Route
        path="/create-community"
        element={
          <ProtectedRoute>

            <MainLayout>
              <CreateCommunityPage />
            </MainLayout>

          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>

            <MainLayout>
              <ProfilePage />
            </MainLayout>

          </ProtectedRoute>
        }
      />

    </Routes>
  );
}