import Head from "next/head";
import React from "react";
import Header from "../components/Header";

function Checkout() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0 | Checkout</title>
      </Head>
      {/* Header */}
      <Header />
      <main className="max-w-screen-2xl mx-auto"></main>
    </div>
  );
}

export default Checkout;
