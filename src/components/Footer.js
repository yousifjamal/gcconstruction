import styles from "@/styles/Footer.module.css";
import CopyrightIcon from '@mui/icons-material/Copyright';
import Image from "next/image";
import { useEffect } from "react";
import { useMediaQuery, createTheme } from "@mui/material";
import 'aos/dist/aos.css';
import Aos from "aos";

const theme = createTheme({});

export default function Footer(){
    useEffect(() => {
        Aos.init();
    }, []);

    const smallsize = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
        <div className={styles.main}>
            <div className={styles.copy} data-aos="fade-right">
                <h1>Ashbal GC Construction Inc. </h1>
                <CopyrightIcon fontSize={ smallsize ? "12" : "large"} />
                <h1>2024</h1>
            </div>
            
            <div className={styles.copy} data-aos='fade-left'>
                <Image src="./blue-phone-7152.svg" width={ smallsize ? 20 : 40} height={ smallsize ? 20 : 40} title="Contact Now" alt="phone icon" className={styles.symbol}/>
                <h1><a href="tel:16477675951">(647) 767 - 5951</a></h1>
            </div>
        </div>
        </>
    );
}