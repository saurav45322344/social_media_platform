// import api from "./api";

// export const getAllPosts =
//   async () => {

//     const response =
//       await api.get("/posts");

//     return response.data;
// };

// export const createPost =
//   async (postData) => {

//     const response =
//       await api.post(
//         "/posts",
//         postData
//       );

//     return response.data;
// };

import api from "./api";

export const createPost = async (postData) => {

  const response = await api.post(
    "/posts",
    postData
  );

  return response.data;
};

export const getAllPosts = async () => {

  const response = await api.get(
    "/posts"
  );

  return response.data;
};