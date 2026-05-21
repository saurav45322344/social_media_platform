// import {
//   createContext,
//   useContext,
//   useState,
// } from "react";

// const AuthContext =
//   createContext();

// export const AuthProvider = ({
//   children,
// }) => {

//   const [token, setToken] =
//     useState(
//       localStorage.getItem("token")
//     );

//   const login = (jwtToken) => {

//     localStorage.setItem(
//       "token",
//       jwtToken
//     );

//     setToken(jwtToken);
//   };

//   const logout = () => {

//     localStorage.removeItem(
//       "token"
//     );

//     setToken(null);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         token,
//         login,
//         logout,
//         isAuthenticated: !!token,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () =>
//   useContext(AuthContext);


import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { jwtDecode } from "jwt-decode";

const AuthContext =
  createContext();

export const AuthProvider = ({
  children,
}) => {

  const [token, setToken] =
    useState(
      localStorage.getItem("token")
    );

  const [user, setUser] =
    useState(null);

  useEffect(() => {

    if (token) {

      try {

        const decoded =
          jwtDecode(token);

        setUser(decoded);

      } catch (error) {

        logout();
      }
    }

  }, [token]);

  const login = (jwtToken) => {

    localStorage.setItem(
      "token",
      jwtToken
    );

    setToken(jwtToken);
  };

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    setToken(null);

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);