"use client"

import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: "600" });

function Navbar() {
  const [navState, setNavState] = useState(true)
  function showNav() {
    navState ? setNavState(!navState) : setNavState(!navState)
  }
  return (
    <header className="fixed z-10 top-0 right-0 left-0 flex justify-end p-4 text-xl lg:backdrop-blur-sm">
      <nav className={`${poppins.className} ${navState ? '-translate-y-full' : 'translate-y-0'} lg:translate-y-0 duration-500 text-white lg:mr-10 absolute -z-10 top-0 left-0 right-0 lg:static bg-[#971313] lg:bg-transparent`}>
        <a className="lg:ml-7 mb-5 text-center mt-16 block lg:inline" href="#start">Start</a>
        <a className="lg:ml-7 mb-5 text-center block lg:inline" href="#main">Main</a>
        <a className="lg:ml-7 mb-5 text-center block lg:inline" href="#about">About</a>
        <a className="lg:ml-7 mb-8 text-center block lg:inline" href="#references">References</a>
      </nav>
      <div onClick={showNav} className='lg:hidden'>
        <div className={`${
          navState ? 'rotate-0' : '-rotate-45 translate-y-2' 
        } origin-center h-1 m-1 w-6 bg-black duration-200 rounded-sm`}></div>
        <div className={`${
          navState ? 'block rotate-0' : 'invisible'
        } origin-center h-1 m-1 w-6 bg-black rounded-sm`}></div>
        <div className={`${
          navState ? 'rotate-0' : 'rotate-45 -translate-y-2'
        } origin-center h-1 m-1 w-6 bg-black duration-200 rounded-sm`}></div>
      </div>
    </header>
  );
}

function Start() {
  return (
    <section className="bg-[#971313] h-screen grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center">
      <div className="order-2 lg:order-1">
        <h1 className={`${poppins.className} mb-8 lg:text-7xl text-4xl text-white`}>Web Developer</h1>
        <a href="#main" className={`${poppins.className} text-2xl px-4 py-2 bg-white rounded-md`}>Start here</a>
      </div>
      <div className="order-1 lg:order-2">
        <Image src="hero_webdev.svg" width={700} height={700} alt="Web Developer"></Image>
      </div>
    </section>
  )
}

function Main(params) {
  return (
    <main className="h-96">
      <p>
        lorem
      </p>
    </main>
  )
}

export default function Page() {
  
  return (
    <>
      <Navbar/>
      <Start/>
      <Main/>
    </>
  );
}
