"use client";
import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Creation from "./components/Creation";
import Footer from "./components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`flex flex-col sm:py-10 sm:px-16 px-10 py-10 w-screen h-screen`}
      >
        <div
          className={`absolute inset-0 ${
            isOpen && `bg-black w-screen h-screen`
          }`}
          onClick={() => setIsOpen(false)}
        />
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className="flex flex-col sm:py-10 sm:px-16 px-10">
        <Hero />
        <Creation />
      </div>
      <Footer />
    </>
  );
}
