import styles from "@/styles/Testimonials.module.css"
import { useEffect } from "react";
import {createTheme} from "@mui/material/styles";
import 'aos/dist/aos.css';
import Aos from "aos";
import useMediaQuery from '@mui/material/useMediaQuery';
import Rating from '@mui/material/Rating';
import Image from "next/image";



export default function Testimonials(){
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
        <div className={styles.main}>
            <div data-aos="fade-down" className={styles.card}>
                <div>
                    <h1>"On Time and to a High Standard"</h1>
                    <br/>
                    <Rating size="large" name="read-only" value={5}/>
                </div>
                <br/>
                <div>
                    <p>Ashbal GC Construction have been carrying out work for Cameron - SLB in Iraq since 2013. We have used them extensively for construction, welding and fabrication, painting and decorating as well as electrical works.</p> 
                    <br/>
                    <p>In all of these jobs they have proved to be a dependable company, delivering goods and services on time and to a high standard. Their GM Nibras Ameen has proven to be knowledgeable and helpful and has a great ability for coming up with solutions for seemingly impossible problems</p>
                    <br/>
                    <p>I would not hesitate to recommend them for any general contracting or construction work.</p>
                </div>
                <div className={styles.signature}>
                    <h5>- Fergus Holmes, Operations Manager, Schlumberger - Cameron</h5>
                </div>
            </div>
            <div data-aos="fade-down" className={styles.card}>
                <div>
                    <h1>"The IDEAL for building renovations!"</h1>
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
                    <h5>- Dr. Ahmed Al-Obaidi, Practice Owner, Barton Dental</h5>
                </div>
            </div>
        </div>
        
        </>
    );
}