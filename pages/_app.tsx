import React from "react";
// import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import MainLayout from "../components/layout/MainLayout";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log("router: ", router);
  return (
    <MainLayout router={router}>
      {/* <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button> */}
      <Component {...pageProps} />
    </MainLayout>
  );
}
export default MyApp;
