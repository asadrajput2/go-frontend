import { useRouter } from "next/router";
import { useEffect } from "react";
import api from "../apiProvider";

export default function useAuthentication(text, pageType) {
  const router = useRouter();

  console.log("base url", process.env.BASE_URL);

  useEffect(() => {
    api("verifyToken", "POST").then((userVerification) => {
      // console.log("userVerification", userVerification);
      if (pageType === "protected" && userVerification?.message !== "success") {
        router.push({
          pathname: "/login",
          query: { text: true },
        });
      } else {
        // if logged user opens public page
        if (pageType === "public" && userVerification?.message === "success")
          router.push("/");
      }
    });
  }, []);

  return true;
}

export async function isAuthenticated() {
  const userVerification = await api("verifyToken", "POST");
  // console.log("userVerification", userVerification);
  return {
    auth: userVerification?.message === "success",
  };
}
