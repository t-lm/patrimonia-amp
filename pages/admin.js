// pages/admin.js

import React, { useEffect, useState } from "react";

import Head from "next/head";
import Link from "next/link";

import Layout from "../comps/layout";
import { getCurrentUser } from "../utils/auth";

export default function Index() {
  const [username, setUsername] = useState();

  useEffect(() => {
    setUsername(getCurrentUser().username);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Patrimonia</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {username && username === "tlm" && (
        <>
          <p>Manage</p>
          <ul style={{ marginTop: 30, padding: 15 }}>
            <li>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                href={{ pathname: "/" }}
              >
                List sites
              </Link>
              {" - "}
              <Link
                style={{ color: "black", textDecoration: "none" }}
                href={{ pathname: "/admin/new", query: { model: "site" } }}
              >
                Add new site
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                href={{ pathname: "/admin/media" }}
              >
                List media
              </Link>
              {" - "}
              <Link
                style={{ color: "black", textDecoration: "none" }}
                href={{ pathname: "/admin/new", query: { model: "media" } }}
              >
                Add new media
              </Link>
            </li>
          </ul>
        </>
      )}
    </Layout>
  );
}
