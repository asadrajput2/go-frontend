import { useRouter } from "next/router";
import React, { useState } from "react";
import api from "../../apiProvider";
import useAuthentication from "../../utils/verifyAuth";
import Link from "next/link"; 

export default function Login() {
  useAuthentication(null, "public");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const text = router.query.text;

  async function handleSubmit() {
    const response = await api("login", "POST", {
      email,
      password,
    });
    console.log("response: ", response);

    if (response?.message === "success") {
      localStorage.setItem("token", response.token.toString());
      router.push("/");
    }
  }

  return (
    <>
      <div className="header">Log in</div>

      <div className="card">
        {text && <span>Please log in first</span>}
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn login-button"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
        <div className="footer-div">
          <p style={{marginRight: 10}}>New?</p>
           <Link href="/signup">
             <a className="link">Sign up</a>
             </Link>
        </div>
      </div>
    </>
  );
}
