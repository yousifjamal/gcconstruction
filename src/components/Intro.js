import styles from "@/styles/Intro.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ForwardIcon from '@mui/icons-material/Forward';
import { Typography } from "@mui/material";
import { useEffect } from "react";
import Image from "next/image";
import 'aos/dist/aos.css';
import Aos from "aos";


export default function Intro(){
    useEffect(() => {
        Aos.init();
    }, []);

    return(
        <>
        <div className={styles.main}>
            <h1 data-aos="fade-up">Building the Future of Healthcare One Clinic at a Time</h1>

            <div data-aos="fade-up" className={styles.cardcontainer}>
                <Card className={styles.card}>
                    <CardMedia component={Image} height={300} image="./SkyBlueprint.png"/>
                    <CardContent>
                        <Typography color={"rgba(255, 255, 255, 0.75)"} variant="h2">
                            From Blueprint
                        </Typography>
                    </CardContent>
                </Card>
                <ForwardIcon  className={styles.arrowcircle}/>
                <Card className={styles.card}>
                    <CardMedia component={Image} height={300} image="./ActiveConstructionSkyDental.png"/>
                    <CardContent>
                        <Typography color={"rgba(255, 255, 255, 0.75)"} variant="h2">
                            To Reality
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
        </>
    );
}