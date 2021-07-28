import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import api from "../../apiProvider";
import { isAuthenticated } from "../../utils/verifyAuth";

export default function UserFAB() {
  const router = useRouter();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
		isAuthenticated().then((results) => {
			// console.log("auth status : ", results);
      setAuth(results.auth);
    });
  }, []);

  async function logout() {
      localStorage.removeItem("token");
      router.push("/login");
    }
  

  function gotToLogin() {
    router.push("/login");
  }

  return (
    <div className="user-fab">
      <div className="user">
        <BiUserCircle />
      </div>
      <div className="user-dropdown">
        {auth ? (
          <>
            <button className="user-btn btn" onClick={logout}>
              Log out
            </button>
          </>
        ) : (
          <button className="user-btn btn" onClick={gotToLogin}>
            Log in
          </button>
        )}
      </div>
    </div>
  );
}
