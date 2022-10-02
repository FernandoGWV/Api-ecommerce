export const API_URL = "https://api.escuelajs.co/api/";

export const TOKEN_POST = (body: any) => {
  return {
    url: API_URL + "v1/auth/login",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};
