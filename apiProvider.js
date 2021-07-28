import Router from "next/router";
const RETRY_COUNT = 5;

// console.log(process.env.BASE_URL);

async function api(endpoint, method, data, optHeaders) {
  const BASE_URL = process.env.BASE_URL;
  const router = Router;
  let token;

  if (typeof window !== "undefined" && window.localStorage)
    token = await localStorage.getItem("token");

  const requestUrl = `${BASE_URL}${endpoint}`;

  console.log(requestUrl);
  const requestConfig = {
    method,
    // mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    // credentials: "include",
    body: JSON.stringify(data),
  };

  if (token) {
    // console.log("token: ", token);
    requestConfig.headers = { ...requestConfig.headers, Authorization: token };
  }

  try {
    const response = await fetch(requestUrl, requestConfig);
    const results = await response.json();

    if (results.error) {
      console.log("error: ", results.error);
      if (results.error.code === "invalid token") {
        await localStorage.removeItem("token");
        router.push("/login");
      }
    }
    return results;
  } catch (e) {
    console.log(e);
  }
}

export default api;
