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
            <div className={styles.textContainer}>
                <h1 data-aos="fade-up"> Realizing Your Vision.</h1>
                <h1 data-aos="fade-up"> Crafting Your Story.</h1>
                <h1 data-aos="fade-up"> Shaping Our Communities.</h1>
            </div>

            <div data-aos="fade-up" className={styles.cardcontainer}>
                <Card className={styles.card}>
                    <CardMedia ><Image src="/SkyBlueprint.png" width={300} height={300} style={{width: '100%', height: '300px'}} /></CardMedia>
                    <CardContent>
                        <Typography color={"rgba(255, 255, 255, 0.75)"} paddingBottom={"1rem"} variant="h2">
                            From Blueprint
                        </Typography>
                    </CardContent>
                </Card>
                <ForwardIcon  className={styles.arrowcircle}/>
                <Card className={styles.card}>
                    <CardMedia><Image src="/toreality.jpg" width={300} height={300} style={{width: '100%', height: '300px'}} /></CardMedia>
                    <CardContent>
                        <Typography color={"rgba(255, 255, 255, 0.75)"} paddingBottom={"1rem"} variant="h2">
                            To Reality
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
        </>
    );
}