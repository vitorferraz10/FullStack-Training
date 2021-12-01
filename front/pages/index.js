import Head from "next/head";
import { useEffect, useState } from "react";

import styles from "../styles/Home.module.css";
export default function Home() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [success, setSuccess] = useState(false);

  function timeOut() {
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  }

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    setSuccess(true);
    const json = await response.json();
    return json;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Form with express - Node json</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containerForm}>
        {success ? (
          <h1>form successfully submitted</h1>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button type="submit" name="btn" onClick={timeOut}>
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
