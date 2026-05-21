import api from "./api";

export const signupUser = async (formData) => {

  const response = await api.post(
    "/auth/signup",
    {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    }
  );

  return response.data;
};

export const loginUser = async (formData) => {

  const response = await api.post(
    "/auth/login",
    {
      email: formData.email,
      password: formData.password,
    }
  );

  return response.data;
};