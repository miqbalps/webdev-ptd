"use client"

import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa6"
import { FaMoneyBillWave } from "react-icons/fa6"
import { FaHouseLaptop } from "react-icons/fa6"
import { FaBriefcase } from "react-icons/fa6"
import { FaArrowUpRightDots } from "react-icons/fa6"
import { FaPalette } from "react-icons/fa6"
import { FaDatabase } from "react-icons/fa6"
import { FaFileCode } from "react-icons/fa6"
import { FaBrain } from "react-icons/fa6"
import { FaBook } from "react-icons/fa6"
import { FaCode } from "react-icons/fa6"


const poppins = Poppins({ subsets: ["latin"], weight: "600" });

function Navbar() {
  const [navState, setNavState] = useState(true)
  const [mainState, setMainState] = useState(true)
  function showNav() {
    setNavState(!navState)
  }
  function showMain() {
    if (window.innerWidth < 1024) {
      setMainState(!mainState)
    }
  }
  return (
    <header className="fixed z-10 top-0 right-0 left-0 flex justify-end px-4 py-3 text-xl lg:bg-[#971313]">
      <nav className={`${poppins.className} ${navState ? '-translate-y-full' : 'translate-y-0'} lg:translate-y-0 duration-500 text-white lg:mr-10 absolute -z-10 top-0 left-0 right-0 lg:static bg-[#971313] lg:bg-transparent shadow-xl lg:shadow-none`}>
        <a className="lg:ml-1 mb-5 text-center mt-16 block lg:inline hover:bg-gray-700 py-2 px-6 lg:rounded-full" href="#start">Start</a>
        <div className="lg:ml-1 mb-5 text-center group/container block lg:inline lg:cursor-default cursor-pointer lg:shadow-2xl">
          <button className="w-full lg:w-auto hover:bg-gray-700 py-2 px-6 lg:rounded-full" onClick={showMain}>Main<FaCaretDown className="inline"/></button> 
          <div className={`${mainState ? 'h-0' : 'h-56'} lg:h-auto lg:hidden lg:absolute overflow-hidden bg-gray-700 text-lg lg:translate-x-[6rem] lg:group-hover/container:block duration-500`}>
            <a href="#pengertian" className="group"><div className="py-2 group-hover:bg-gray-600 px-4">Pengertian</div></a>
            <a href="#alasan" className="group"><div className="py-2 group-hover:bg-gray-600 px-4">Alasan</div></a>
            <a href="#jenis" className="group"><div className="py-2 group-hover:bg-gray-600 px-4">Jenis</div></a>
            <a href="#skill" className="group"><div className="py-2 group-hover:bg-gray-600 px-4">Skill</div></a>
            <a href="#cara" className="group"><div className="py-2 group-hover:bg-gray-600 px-4 h-full lg:h-auto">Cara</div></a>
          </div>
        </div>
        <a className="lg:ml-1 mb-5 text-center block lg:inline hover:bg-gray-700 py-2 px-6 lg:rounded-full" href="#contact">Contact</a>
        <a className="lg:ml-1 mb-8 text-center block lg:inline hover:bg-gray-700 py-2 px-6 lg:rounded-full" href="#references">References</a>
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
    <section className="bg-gradient-to-t from-red-950 to-[#971313] h-screen grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center">
      <div className="order-2 lg:order-1">
        <h1 className={`${poppins.className} mb-10 lg:text-7xl text-4xl text-white`}>Web Developer</h1>
        <a href="#main" className={`${poppins.className} text-2xl px-6 py-4 bg-white rounded-sm hover:bg-gray-700 hover:text-white shadow-2xl duration-200`}>Start here</a>
      </div>
      <div className="order-1 lg:order-2">
        <Image priority={true} className="animate-[flying_4s_ease-in-out_infinite]" src="programming.svg" width={500} height={500} alt="Web Developer"/>
      </div>
    </section>
  )
}

function Main() {
  return (
    <main id="main" className="lg:py-16 lg:px-40 p-6 bg-[#F9F9F9]">
      <section className="mt-4 lg:mt-1">
        <p className="text-base lg:text-lg text-justify">Hasil riset yang dilakukan Bank Dunia dan McKinsey menunjukkan bahwa Indonesia membutuhkan 9 juta talenta digital pada 2030. Jika dirata-rata, kebutuhan talenta digital ini mencapai 600.000 orang per tahun. Dari hasil riset ini bisa disimpulkan profesi it di indonesia itu lagi dibutuhin banget nih sekarang atau mungkin bahkan dimasa depan. Apalagi dengan perkembangan zaman  ini, teknologi semakin canggih sehingga profesi it menjadi salah satu profesi yang berpeluang sukses besar. Jadi bagi kalian nih yang masih terobang ambing di lautan mimpi profesi it mungkin bisa jadi salah satu pilihan kalian. Dari sekian banyak profesi it yang keren seperti data scientist, software enginer, dan cyber cecurity ada profesi it yang ga kalah keren nih, namanya web developer. Penasarankan tentang profesi yang keren satu ini? Tenang di blog ini mimin bakal kupas tuntas tentang profesi web developer mulai dari pengertian, jobdesk, skill, sampai penghasilan bakal mimin kupas habis. So keep reading.</p>
      </section>
      <section id="pengertian">
        <h3 className="font-bold text-xl lg:text-3xl mt-6 mb-4">Apa itu <span className="text-[#971313]">Web Developer</span>?</h3>
        <p className="text-base lg:text-lg text-justify"><span className="font-bold text-[#971313]">Web Developer</span> terdiri dari kata <span className="font-bold text-[#971313]">web</span> dan <span className="font-bold text-[#971313]">developer</span>.<span className="font-bold text-[#971313]">Web</span> atau biasa disebut World Wide Web (www) adalah bagian dari Internet yang terdiri dari halaman-halaman yang dapat diakses oleh browser Web. Sementara, <span className="font-bold text-[#971313]">developer</span> adalah seseorang yang mengembangkan sesuatu.</p>
        <div className="p-10 bg-gray-200 mt-4 rounded-xl"><p className="text-lg lg:text-xl text-center text-[#971313]">Jadi, <b>Web developer</b> adalah seseorang atau programmer yang bertugas membuat dan mengembangkan website</p></div>
      </section>
      <section id="alasan">
        <h3 className="font-bold text-xl lg:text-3xl my-10 text-center">Kenapa harus jadi <span className="text-[#971313]">Web Developer</span>?</h3>
        <div className="grid lg:grid-cols-2 gap-8">
            <div className="text-center relative shadow-lg border-4 rounded-md py-8 px-8 lg:px-14">
              <h1 className="absolute font-extrabold top-4 left-4 text-8xl text-red-200 inline">01</h1>
              <FaMoneyBillWave icon="fa-regular" className="inline relative m-auto text-7xl text-[#971313]"/>
              <h1 className="text-lg lg:text-xl font-bold my-4">Salary Tinggi</h1>
              <p className="text-base lg:text-lg">Menurut Salary Explorer, gaji terendah web developer sebesar Rp5.000.000 per bulan dan gaji tertinggi sebesar Rp17.800.000 per bulan</p>
            </div> 
            <div className="text-center relative shadow-lg border-4 rounded-md py-8 px-8 lg:px-14">
              <h1 className="absolute font-extrabold top-4 left-4 text-8xl text-red-200 inline">02</h1>
              <FaHouseLaptop className="inline relative m-auto text-8xl text-[#971313]"/>
              <h1 className="text-lg lg:text-xl font-bold my-4">Bekerja Fleksibel</h1>
              <p className="text-base lg:text-lg">Selain bekerja di kantor, seorang Web Developer juga bisa bekerja dari rumah karena kebanyakan web developer bisa Work from Anywhere (WFA)</p>
            </div> 
            <div className="text-center relative shadow-lg border-4 rounded-md py-8 px-8 lg:px-14">
              <h1 className="absolute font-extrabold top-4 left-4 text-8xl text-red-200 inline">03</h1>
              <FaBriefcase className="inline relative m-auto text-7xl text-[#971313]"/>
              <h1 className="text-lg lg:text-xl font-bold my-4">Prospek Karier yang Menjanjikan</h1>
              <p className="text-base lg:text-lg">Tingginya minat para pelaku usaha terhadap website, membuat prospek karir bagi seorang Web Developer semakin menjanjikan</p>
            </div> 
            <div className="text-center relative shadow-lg border-4 rounded-md py-8 px-8 lg:px-14">
              <h1 className="absolute font-extrabold top-4 left-4 text-8xl text-red-200 inline">04</h1>
              <FaArrowUpRightDots className="inline relative m-auto text-7xl text-[#971313]"/>
              <h1 className="text-lg lg:text-xl font-bold my-4">IT Akan Terus Mengalami Perkembangan</h1>
              <p className="text-base lg:text-lg">Teknologi akan terus berkembang seiring berjalannya waktu, inilah mengapa profesi web developer akan bertahan hingga puluhan tahun kedepan.</p>
            </div> 
        </div>
      </section>
      <section id="jenis">
        <h3 className="font-bold text-xl lg:text-3xl text-center mb-6 mt-10">Jenis <span className="text-[#971313]">Web Developer</span></h3>
        <p className="text-base lg:text-lg text-justify lg:text-center">Berdasarkan tugas dan tanggung jawabnya, web developer terbagi menjadi tiga jenis berbeda, yakni front end, back end, dan full stack developer. Berikut penjelasan masing-masing jenisnya.</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-8">
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#971313] to-red-950 text-center text-white">
            <div className="p-4 bg-white w-fit rounded-full m-auto mb-4"><FaPalette className="text-[#971313] text-4xl"/></div>
            <h4 className="font-bold text-lg lg:text-xl">Frontend Developer</h4>
            <p className="my-6">Frontend Developer adalah seseorang yang bertugas untuk mengembangkan dan memelihara bagian depan suatu website</p>
            <div>
              <Image className="inline mx-2 w-16" alt="React" width={100} height={10} src="/jenis/frontend/react.svg"/>
              <Image className="inline mx-2 w-16" alt="Vue" width={100} height={10} src="/jenis/frontend/vue.svg"/>
              <Image className="inline mx-2 w-16" alt="Angular" width={100} height={10} src="/jenis/frontend/angular.svg"/>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#971313] to-red-950 text-center text-white">
            <div className="p-4 bg-white rounded-full w-fit m-auto mb-4"><FaDatabase className="text-[#971313] text-4xl"/></div>
            <h4 className="font-bold text-lg lg:text-xl">Backend Developer</h4>
            <p className="my-6">Backend Developer adalah seseorang yang bertanggung jawab untuk melakukan pengembangan serta pemeriharaan server dan database</p>
            <div>
              <Image className="inline mx-2 w-16" alt="Golang" width={100} height={10} src="/jenis/backend/golang.svg"/>
              <Image className="inline mx-2 w-16" alt="MySQL" width={100} height={10} src="/jenis/backend/mysql.svg"/>
              <Image className="inline mx-2 w-16" alt="Php" width={100} height={10} src="/jenis/backend/php.svg"/>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#971313] to-red-950 text-center text-white">
            <div className="p-4 bg-white rounded-full w-fit m-auto mb-4"><FaFileCode className="text-[#971313] text-4xl"/></div>
            <h4 className="font-bold text-lg lg:text-xl">Fullstack Developer</h4>
            <p className="my-6">Fullstack Developer adalah seseorang yang melakukan pekerjaan front-end dan back-end sekaligus.</p>
            <div>
              <Image className="inline mx-2 w-16 bg-white rounded-full p-1" alt="Next JS" width={100} height={10} src="/jenis/fullstack/nextjs.svg"/>
              <Image className="inline mx-2 w-16" alt="Node JS" width={100} height={10} src="/jenis/fullstack/nodejs.svg"/>
              <Image className="inline mx-2 w-16" alt="MongoDB" width={100} height={10} src="/jenis/fullstack/mongodb.svg"/>
            </div>
          </div>
        </div>
      </section>
      <section id="skill">
        <h3 className="font-bold text-xl lg:text-3xl text-center my-10">Skill yang dibutuhkan <span className="text-[#971313]">Web Developer</span></h3>
        <div className="flex flex-wrap sm:flex-nowrap mb-6">
          <div className="sm:w-fit w-full bg-[#971313] py-6 px-12 rounded-lg text-white">
            <FaBrain className="text-6xl m-auto"/>
            <h3 className="text-center font-bold text-lg lg:text-xl mt-4">Problem Solving</h3>
          </div>
          <div className="flex items-center max-w-[50rem] sm:mx-0 mx-4">
            <p className="text-base lg:text-lg bg-gray-200 py-6 px-4">Karena pekerjaan seorang developer atau programmer tidak terlepas dari mengoreksi bug dan membuat algoritma-algoritma, oleh karena itu dibutuhkan logika yang kuat untuk memecahkan masalah tersebut</p>
          </div>
        </div>
        <div className="flex justify-end flex-wrap sm:flex-nowrap mb-6">
          <div className="sm:w-fit w-full bg-[#971313] py-6 px-12 rounded-lg text-white sm:order-2">
            <FaBook className="text-6xl m-auto"/>
            <h3 className="text-center font-bold text-lg lg:text-xl mt-4">Bahasa Inggris</h3>
          </div>
          <div className="flex items-center max-w-[50rem] sm:mx-0 mx-4 sm:order-1">
            <p className="text-base lg:text-lg bg-gray-200 py-6 px-4">Skill bahasa inggris dapat membantu seorang web developer untuk berkembang karena kebanyakan dokumentasi pemograman yang ada saat ini memakai bahasa inggris seperti w3school dan MDN</p>
          </div>
        </div>
        <div className="flex flex-wrap sm:flex-nowrap mb-6">
          <div className="sm:w-fit w-full bg-[#971313] py-6 px-12 rounded-lg text-white">
            <FaCode className="text-6xl m-auto"/>
            <h3 className="text-center font-bold text-lg lg:text-xl mt-4">Pemrograman</h3>
          </div>
          <div className="flex items-center max-w-[50rem] sm:mx-0 mx-4">
            <p className="text-base lg:text-lg bg-gray-200 py-6 px-4">Apapun jenis web developer-nya, tetaplah wajib untuk menguasai bahasa markup. Sebab, hal ini merupakan pondasi untuk membuat halaman website. Bahasa markup yang bisa Anda pelajari, di antaranya: HTML, CSS, Javascript</p>
          </div>
        </div>
      </section>
      <section id="cara">
      <h3 className="font-bold text-xl lg:text-3xl mb-6 mt-10">Cara menjadi <span className="text-[#971313]">Web Developer</span></h3>
        <p className="text-base lg:text-lg text-justify">Untuk web developer tentunya bukan hal yang mudah.kita harus terus belajar dan berlatih secara bertahap dan konsisten.misalnya membuat project kecil kecilan seperti portofolio atau yang lainya. berikut adalah contoh project</p>
        <h3 className="font-bold text-lg lg:text-xl text-center mt-7">Rekomendasi Belajar</h3>
        <p className="text-base lg:text-lg text-center my-5">Rekomendasi course online untuk membantu mengembangkan kemampuan pembuatan website-mu.</p>
        <div className="mb-7 overflow-hidden py-4">
          <div className="flex flex-nowrap">
            <Image className="inline w-auto mx-6" alt="dicoding" width={200} height={200} src="/course/harisenin.png"/>
          </div>
        </div>
      </section>
      <section id="contact">
        <h3 className="font-bold text-xl lg:text-3xl mt-7 text-center">Contact</h3>
        <div className="flex justify-around flex-wrap">
          <div className="rounded-lg overflow-hidden shadow-2xl mt-14">
            <div className="bg-[url('/people.jpg')] bg-center bg-cover h-44"></div>
            <div className="p-6">
              <h4 className="font-bold text-center">152023073</h4>
              <h4 className="font-bold text-center my-5">Dindin Imanudin</h4>
              <div className="text-center">
                <a className="text-4xl text-gray-700 group hover:text-[#971313] mx-4" href=""><FaInstagram className="inline group-hover:-translate-y-1 duration-200"/></a>
                <a className="text-4xl text-gray-700 group hover:text-[#971313] mx-4" href=""><FaGithub className="inline group-hover:-translate-y-1 duration-200"/></a>
                <a className="text-4xl text-gray-700 group hover:text-[#971313] mx-4" href=""><FaLinkedin className="inline group-hover:-translate-y-1 duration-200"/></a>
              </div>
            </div>
            <div className="bg-[#971313] h-4"></div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl mt-14">
            <div className="bg-[url('/people.jpg')] bg-center bg-cover h-44"></div>
            <div className="p-6">
              <h4 className="font-bold text-center">152023073</h4>
              <h4 className="font-bold text-center my-5">Dindin Imanudin</h4>
              <div className="text-center">
                <a className="text-4xl text-gray-700 group hover:text-[#971313] mx-4" href=""><FaInstagram className="inline group-hover:-translate-y-1 duration-200"/></a>
                <a className="text-4xl text-gray-700 group hover:text-[#971313] mx-4" href=""><FaGithub className="inline group-hover:-translate-y-1 duration-200"/></a>
                <a className="text-4xl text-gray-700 group hover:text-[#971313] mx-4" href=""><FaLinkedin className="inline group-hover:-translate-y-1 duration-200"/></a>
              </div>
            </div>
            <div className="bg-[#971313] h-4"></div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl mt-14">
            <div className="bg-[url('/people.jpg')] bg-center bg-cover h-44"></div>
            <div className="p-6">
              <h4 className="font-bold text-center">152023073</h4>
              <h4 className="font-bold text-center my-5">Dindin Imanudin</h4>
              <div className="text-center">
                <a className="text-4xl text-gray-700 group hover:text-[#971313] mx-4" href=""><FaInstagram className="inline group-hover:-translate-y-1 duration-200"/></a>
                <a className="text-4xl text-gray-700 group hover:text-[#971313] mx-4" href=""><FaGithub className="inline group-hover:-translate-y-1 duration-200"/></a>
                <a className="text-4xl text-gray-700 group hover:text-[#971313] mx-4" href=""><FaLinkedin className="inline group-hover:-translate-y-1 duration-200"/></a>
              </div>
            </div>
            <div className="bg-[#971313] h-4"></div>
          </div>
        </div>
        <div className="flex justify-around flex-wrap">
          <div className="rounded-lg overflow-hidden shadow-2xl mt-14">
            <div className="bg-[url('/people.jpg')] bg-center bg-cover h-44"></div>
            <div className="p-6">
              <h4 className="font-bold text-center">152023073</h4>
              <h4 className="font-bold text-center my-5">Dindin Imanudin</h4>
              <div className="text-center">
                <a className="text-4xl text-gray-700 group hover:text-[#971313] mx-4" href=""><FaInstagram className="inline group-hover:-translate-y-1 duration-200"/></a>
                <a className="text-4xl text-gray-700 group hover:text-[#971313] mx-4" href=""><FaGithub className="inline group-hover:-translate-y-1 duration-200"/></a>
                <a className="text-4xl text-gray-700 group hover:text-[#971313] mx-4" href=""><FaLinkedin className="inline group-hover:-translate-y-1 duration-200"/></a>
              </div>
            </div>
            <div className="bg-[#971313] h-4"></div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl mt-14">
            <div className="bg-[url('/people.jpg')] bg-center bg-cover h-44"></div>
            <div className="p-6">
              <h4 className="font-bold text-center">152023073</h4>
              <h4 className="font-bold text-center my-5">Dindin Imanudin</h4>
              <div className="text-center">
                <a className="text-4xl text-gray-700 group hover:text-[#971313] mx-4" href=""><FaInstagram className="inline group-hover:-translate-y-1 duration-200"/></a>
                <a className="text-4xl text-gray-700 group hover:text-[#971313] mx-4" href=""><FaGithub className="inline group-hover:-translate-y-1 duration-200"/></a>
                <a className="text-4xl text-gray-700 group hover:text-[#971313] mx-4" href=""><FaLinkedin className="inline group-hover:-translate-y-1 duration-200"/></a>
              </div>
            </div>
            <div className="bg-[#971313] h-4"></div>
          </div>
        </div>
      </section>
      <section id="references">
        <h3 className="font-bold text-xl lg:text-2xl">References</h3>
        <p>lorem</p>
      </section>
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
