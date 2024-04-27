import styles from "@/styles/Projects.module.css";
import Image from "next/image";
import { useEffect } from "react";
import {createTheme} from "@mui/material/styles";
import 'aos/dist/aos.css';
import Aos from "aos";
import useMediaQuery from '@mui/material/useMediaQuery';

//Card imports
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardHeader, Typography, colors, typographyClasses } from "@mui/material";

//Swiper modules 
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Pagination, Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const theme = createTheme({});

export default function Projects(){
    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));
    const titleStyle = {color: 'rgba(255, 255, 255, 0.85)', variant: matchDownMd ? 'h4' : 'h2'};
    const subheadingStyle = {color: 'rgba(255, 255, 255, 0.55)', variant: matchDownMd ? 'p' : 'h4'};

    return (
        <>
        <div data-aos="fade-in" className={styles.main}>
            <div data-aos="fade-up" className={styles.subtitle}>   
                <h1 data-aos="fade-up">Our</h1>
                <h1 data-aos="fade-up" className={styles.push}>Projects</h1>
            </div>

            <Swiper data-aos="fade-up" effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true} slidesPerView={'2'} loopedSlidesLimit={false}
            coverflowEffect={{rotate: 0, stretch: 0, depth: 100, modifier: 2.5}}
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
                clickable: true
            }}
            pagination={{el:'.swiper-pagination', clickable: true}}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className={styles.swipeContainer}>
                <SwiperSlide className={styles.swiperslide}>
                    <Card className={styles.card}>
                        <CardHeader title="Dental Lecture Room" titleTypographyProps={titleStyle} subheader="Tomken Dental" subheaderTypographyProps={subheadingStyle}/>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <Card className={styles.card}>
                        <CardHeader title="UNDP School" titleTypographyProps={titleStyle} subheader="Contract No. P/AM 109-19" subheaderTypographyProps={subheadingStyle}/>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <Card className={styles.card}>
                        <CardHeader title="Residential Renovation" titleTypographyProps={titleStyle} subheader="Walk-out Basement" subheaderTypographyProps={subheadingStyle}/>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <Card className={styles.card}>
                        <CardHeader title="UNDP Police Station" titleTypographyProps={titleStyle} subheader="Contract No. P/AM 109-19" subheaderTypographyProps={subheadingStyle}/>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <Card className={styles.card}>
                        <CardHeader title="Dental Clinic (ongoing)" titleTypographyProps={titleStyle} subheader="Sky Dental" subheaderTypographyProps={subheadingStyle}/>
                    </Card>
                </SwiperSlide>

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        
                    </div>
                    
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </div>
        </>
    );
}