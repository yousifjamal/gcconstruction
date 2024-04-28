import styles from "@/styles/Testimonials.module.css"
import { useEffect } from "react";
import {createTheme} from "@mui/material/styles";
import 'aos/dist/aos.css';
import Aos from "aos";
import useMediaQuery from '@mui/material/useMediaQuery';
import Rating from '@mui/material/Rating';



export default function Testimonials(){
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
        <div data-aos="fade-down" className={styles.main}>
            <div>
                <h1>The IDEAL for building renovations!</h1>
                <br/>
                <Rating size="large" name="read-only" value={5}/>
            </div>
            <br/>
            <div>
                <p>From the outset, Ashbal GC Construction exhibited a profound understanding of the nuanced requirements inherent in renovating a warehouse into a conducive learning environment for dental surgery courses.</p> 
                <br/>
                <p>Their expertise in optimizing space utilization and integrating cutting-edge technology ensured that every aspect of the lecturing hall was meticulously designed to enhance the educational experience  for both instructors and students alike.</p>
            </div>
            <div className={styles.signature}>
                <h5>- Dr. Ahmed Al-Obaidi</h5>
            </div>
        </div>
        </>
    );
}