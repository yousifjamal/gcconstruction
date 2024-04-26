import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import Intro from "@/components/Intro";
import Partners from "@/components/Partners";

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
        <Partners/>
        <div className={styles.typewriter}><p>Remainder of Website under construction</p></div>
        <div className={styles.scrolltest}>

        </div>
      </main>
    </>
  );
}
