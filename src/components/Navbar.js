import { Inter } from "next/font/google";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import {useEffect, useState} from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () =>{
            if (window.scrollY > 5){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {window.removeEventListener("scroll", handleScroll);};
    }, []);

  return (
    <>
      <div className={`${styles.main} ${isScrolled ? styles.scrolled : styles.notScrolled}`}>
        <div className={styles.Logo}>
            <Image src="./logo.svg" layout="fill" title="Ashbal GC Construction Inc." alt="Ashbal GC Construction Inc. Logo"/>
        </div>
        

        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="#projects-section">Projects</Link></li>
            <li><Link href="#contact-section">Contact</Link></li>
        </ul>

        <div className={styles.phone} >
            <div className={styles.phoneico}>
                <Image src="./blue-phone-7152.svg" layout="fill" title="Contact Now" alt="phone icon"/>
            </div>
            
            <p><a href="tel:16477675951">(647) 767 - 5951</a></p>
        </div>
      </div>
    </>
  );
}
