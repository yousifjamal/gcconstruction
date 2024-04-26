import styles from "@/styles/Partners.module.css"
import Image from "next/image";
import { useEffect } from "react";
import {createTheme} from "@mui/material/styles";
import 'aos/dist/aos.css';
import Aos from "aos";
import useMediaQuery from '@mui/material/useMediaQuery';

const theme = createTheme({});

export default function Partners(){
    useEffect(() => {
        Aos.init();
    }, []);

    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
        <div data-aos="fade-up" className={styles.main}>
            <div data-aos="fade-up" className={styles.subtitle}>
                <h1>Our</h1>
                <h1 className={styles.push}>Partners</h1>
            </div>
            
            <div data-aos="zoom-out" className={styles.CompanyLogos}>
                <Image src="/UNDP.svg" width={matchDownMd ?  40: 100} height={matchDownMd ? 80 : 200} />
                <Image src="/UN.svg" width={matchDownMd ? 100 : 200} height={ matchDownMd ? 100 : 200}  />
                <Image src="/TomkenDental.svg" width={matchDownMd ? 120 : 300} height={ matchDownMd? 80 : 150}  />
                <Image src="/Sky Dental.svg" width={matchDownMd ? 100 : 200} height={ matchDownMd? 100: 200}  />
            </div>
        </div>
        </>
    );
}