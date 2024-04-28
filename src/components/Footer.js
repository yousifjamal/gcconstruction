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
                <h1>Ashbal GC Construction Inc. </h1>
                <CopyrightIcon fontSize={ smallsize ? "medium" : "large"} />
                <h1>2024</h1>
        </div>
        </>
    );
}