"use client"

import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa6"
import { FaMoneyBillWave } from "react-icons/fa6"


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
    <header className="fixed z-10 top-0 right-0 left-0 flex justify-end p-4 text-xl lg:bg-[#971313]">
      <nav className={`${poppins.className} ${navState ? '-translate-y-full' : 'translate-y-0'} lg:translate-y-0 duration-500 text-white lg:mr-10 absolute -z-10 top-0 left-0 right-0 lg:static bg-[#971313] lg:bg-transparent shadow-xl lg:shadow-none`}>
        <a className="lg:ml-7 mb-5 text-center mt-16 block lg:inline" href="#start">Start</a>
        <div className="lg:ml-7 mb-5 text-center group/container block lg:inline lg:cursor-default cursor-pointer lg:shadow-2xl">
          <button className="w-full lg:w-auto" onClick={showMain}>Main<FaCaretDown className="inline"/></button> 
          <div className={`${mainState ? 'h-0' : 'h-56'} lg:h-auto lg:hidden lg:absolute overflow-hidden bg-gray-700 text-lg lg:translate-x-[4.5rem] lg:group-hover/container:block duration-500`}>
            <a href="#pengertian" className="group"><div className="py-2 group-hover:bg-gray-600 px-4">Pengertian</div></a>
            <a href="#alasan" className="group"><div className="py-2 group-hover:bg-gray-600 px-4">Alasan</div></a>
            <a href="#jenis" className="group"><div className="py-2 group-hover:bg-gray-600 px-4">Jenis</div></a>
            <a href="#skill" className="group"><div className="py-2 group-hover:bg-gray-600 px-4">Skill</div></a>
            <a href="#cara" className="group"><div className="py-2 group-hover:bg-gray-600 px-4 h-full lg:h-auto">Cara</div></a>
          </div>
        </div>
        <a className="lg:ml-7 mb-5 text-center block lg:inline" href="#contact">Contact</a>
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
        <h3 className="font-bold text-xl lg:text-2xl">Apa itu Web Developer?</h3>
        <p className="text-base lg:text-lg text-justify">Web Developer terdiri dari kata web dan Developer. Web atau biasa disebut World Wide Web (www) adalah bagian dari Internet yang terdiri dari halaman-halaman yang dapat diakses oleh browser Web. Sementara, developer adalah seseorang yang mengembangkan sesuatu. Jadi, Web developer adalah seseorang atau programmer yang bertugas membuat dan mengembangkan website</p>
      </section>
      <section id="alasan">
        <h3 className="font-black text-xl lg:text-2xl">Kenapa harus jadi Web Developer?</h3>
        <div className="grid lg:grid-cols-2 gap-6">
            <div className="text-center relative shadow-lg border-4 rounded-md p-8">
              <h1 className="absolute top-4 left-4 text-8xl text-red-200 inline">01</h1>
              <FaMoneyBillWave className="inline relative m-auto text-8xl text-[#971313]"/>
              <h1>Salary Tinggi</h1>
              <p>Gaji Web developer dapat bervariasi tergantung pada kualifikasi dan kemampuan individu, serta kondisi pasar kerja di masa depan. Menurut Salary Explorer, gaji terendah web developer sebesar Rp5.000.000 per bulan dan gaji tertinggi sebesar Rp17.800.000 per bulan</p>
            </div> 
            <div className="text-center relative shadow-lg border-4 rounded-md p-8">
              <h1 className="absolute top-4 left-4 text-8xl text-red-200 inline">02</h1>
              <FaMoneyBillWave className="inline relative m-auto text-8xl text-[#971313]"/>
              <h1>Bekerja Fleksibel</h1>
              <p>Selain bekerja di kantor, seorang Web Developer juga bisa bekerja dari rumah karena kebanyakan web developer bisa Work from Anywhere (WFA)</p>
            </div> 
            <div className="text-center relative shadow-lg border-4 rounded-md p-8">
              <h1 className="absolute top-4 left-4 text-8xl text-red-200 inline">03</h1>
              <FaMoneyBillWave className="inline relative m-auto text-8xl text-[#971313]"/>
              <h1>Prospek Karier yang Menjanjikan</h1>
              <p>Tingginya minat para pelaku usaha terhadap website, membuat prospek karir bagi seorang Web Developer semakin menjanjikan</p>
            </div> 
            <div className="text-center relative shadow-lg border-4 rounded-md p-8">
              <h1 className="absolute top-4 left-4 text-8xl text-red-200 inline">04</h1>
              <FaMoneyBillWave className="inline relative m-auto text-8xl text-[#971313]"/>
              <h1>IT Akan Terus Mengalami Perkembangan</h1>
              <p>Teknologi akan terus berkembang seiring berjalannya waktu, inilah mengapa profesi web developer akan bertahan hingga puluhan tahun kedepan.</p>
            </div> 
        </div>
        <p className="text-base lg:text-lg text-justify">lorem ipsum</p>
      </section>
      <section id="jenis">
        <h3 className="font-bold text-xl lg:text-2xl">Jenis Web Developer</h3>
        <p className="text-base lg:text-lg text-justify">Berdasarkan tugas dan tanggung jawabnya, web developer terbagi menjadi tiga jenis berbeda, yakni front end, back end, dan full stack developer. Berikut penjelasan masing-masing jenisnya.</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-6">
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#971313] to-red-950 text-center text-white">
            <div className="py-2 bg-white rounded-full w-fit m-auto mb-4"><Image className="inline mx-2 w-auto" alt="html" width={50} height={50} src="frontend.svg"/></div>
            <h4 className="font-bold text-lg lg:text-xl">Frontend Developer</h4>
            <p className="my-6">Frontend Developer adalah seseorang yang bertugas untuk mengembangkan dan memelihara bagian depan suatu website</p>
            <div>
              <Image className="inline mx-2 w-auto" alt="html" width={50} height={50} src="html.svg"/>
              <Image className="inline mx-2 w-auto" alt="html" width={50} height={50} src="css.svg"/>
              <Image className="inline mx-2 w-auto" alt="html" width={50} height={50} src="js.svg"/>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#971313] to-red-950 text-center text-white">
            <div className="py-2 bg-white rounded-full w-fit m-auto mb-4"><Image className="inline mx-2 w-auto" alt="html" width={50} height={50} src="binary-code.svg"/></div>
            <h4 className="font-bold text-lg lg:text-xl">Backend Developer</h4>
            <p className="my-6">Backend Developer adalah seseorang yang bertanggung jawab untuk melakukan pengembangan serta pemeriharaan server dan database</p>
            <div>
              <Image className="inline mx-2 w-auto" alt="html" width={50} height={50} src="java.svg"/>
              <Image className="inline mx-2 w-auto" alt="html" width={50} height={50} src="python.svg"/>
              <Image className="inline mx-2 w-auto" alt="html" width={50} height={50} src="php.svg"/>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-r from-[#971313] to-red-950 text-center text-white">
            <div className="py-2 bg-white rounded-full w-fit m-auto mb-4"><Image className="inline mx-2 w-auto" alt="html" width={50} height={50} src="coding.svg"/></div>
            <h4 className="font-bold text-lg lg:text-xl">Fullstack Developer</h4>
            <p className="my-6">Fullstack Developer adalah seseorang yang melakukan pekerjaan front-end dan back-end sekaligus.</p>
            <div>
              <Image className="inline mx-2 w-auto" alt="html" width={50} height={50} src="js.svg"/>
              <Image className="inline mx-2 w-auto" alt="html" width={50} height={50} src="python.svg"/>
              <Image className="inline mx-2 w-auto" alt="html" width={50} height={50} src="php.svg"/>
            </div>
          </div>
        </div>
      </section>
      <section id="skill">
        <h3 className="font-bold text-xl lg:text-2xl">Skill Web Developer</h3>
        <p>lorem</p>
      </section>
      <section id="cara">
        <h3 className="font-bold text-xl lg:text-2xl">Cara menjadi Web Developer</h3>
        <p className="text-base lg:text-lg text-justify">Untuk web developer tentunya bukan hal yang mudah.kita harus terus belajar dan berlatih secara bertahap dan konsisten.misalnya membuat project kecil kecilan seperti portofolio atau yang lainya. berikut adalah contoh project</p>
        <h3 className="font-bold text-lg lg:text-xl text-center mt-7">Rekomendasi Belajar</h3>
        <p className="text-base lg:text-lg text-center my-5">Rekomendasi course online untuk membantu mengembangkan kemampuan pembuatan website-mu.</p>
        <div className="mb-7 overflow-hidden py-4">
          <div className="flex flex-nowrap animate-[autoscroll_20s_linear_infinite]">
            <Image className="inline w-auto mx-6" alt="html" width={50} height={50} src="/course/dicoding.svg"/>
            <Image className="inline w-auto mx-6" alt="html" width={50} height={50} src="/course/freecodecamp.svg"/>
            <Image className="inline w-auto mx-6" alt="html" width={50} height={50} src="/course/progate.svg"/>
            <Image className="inline w-auto mx-6" alt="html" width={50} height={50} src="/course/udemy.svg"/>
            <Image className="inline w-auto mx-6" alt="html" width={50} height={50} src="/course/codepolitan.svg"/>
            <Image className="inline w-auto mx-6" alt="html" width={50} height={50} src="/course/harisenin.svg"/>
            <Image className="inline w-auto mx-6" alt="html" width={50} height={50} src="/course/dicoding.svg"/>
            <Image className="inline w-auto mx-6" alt="html" width={50} height={50} src="/course/freecodecamp.svg"/>
            <Image className="inline w-auto mx-6" alt="html" width={50} height={50} src="/course/progate.svg"/>
            <Image className="inline w-auto mx-6" alt="html" width={50} height={50} src="/course/udemy.svg"/>
            <Image className="inline w-auto mx-6" alt="html" width={50} height={50} src="/course/codepolitan.svg"/>
            <Image className="inline w-auto mx-6" alt="html" width={50} height={50} src="/course/harisenin.svg"/>
          </div>
        </div>
      </section>
      <section id="contact">
        <h3 className="font-bold text-xl lg:text-2xl mt-7">Contact</h3>
        <div className="flex justify-around flex-wrap">
          <div className="rounded-lg overflow-hidden shadow-2xl mt-10">
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
          <div className="rounded-lg overflow-hidden shadow-2xl mt-10">
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
          <div className="rounded-lg overflow-hidden shadow-2xl mt-10">
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
          <div className="rounded-lg overflow-hidden shadow-2xl mt-10">
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
          <div className="rounded-lg overflow-hidden shadow-2xl mt-10">
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
