import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Intro from "@/components/Intro";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ashbal GC Construction</title>
        <meta name="description" content="Company website for Ashbal GC Construction Inc." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Navbar/>
        <HeroBanner/>
        <Intro/>
        <Projects/>
        <Partners/>
        <Testimonials/>
        <ContactUs/>
        <Footer/>
      </main>
    </>
  );
}
