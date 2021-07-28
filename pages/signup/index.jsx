import { useRouter } from "next/router";
import React, { useState } from "react";
import api from "../../apiProvider";
import useAuthentication from "../../utils/verifyAuth";
import Link from "next/link";

export default function Login() {
  useAuthentication(null, "public");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const router = useRouter();
  const text = router.query.text;

  async function handleSubmit() {
    const response = await api("signup", "POST", {
      email,
      name,
      password,
      phone,
    });
    // console.log("response: ", response);

    if (response?.message === "success") {
      localStorage.setItem("token", response.token.toString());
      router.push("/");
    }
  }

  return (
    <>
      <div className="header">Sign up</div>

      <div className="card">
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Password"
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          placeholder="Phone Number"
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <button
          className="btn login-button"
          type="submit"
          onClick={handleSubmit}
        >
          Signup
        </button>
        <div className="footer-div">
          <p style={{marginRight: 10}}>Old?</p>
           <Link href="/login">
             <a className="link">Login</a>
             </Link>
        </div>
      </div>
    </>
  );
}
3