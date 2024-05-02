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
import { CardHeader, ImageList, ImageListItem, Typography, colors, typographyClasses } from "@mui/material";

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
    const imageListItem = matchDownMd ? 200 : 200;

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
        <div data-aos="fade-in" className={styles.main}  id="projects-section">
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
                        <CardHeader title="Dental Lecture Room" titleTypographyProps={titleStyle} subheader="Barton Dental" subheaderTypographyProps={subheadingStyle}/>
                        <CardMedia >
                            <ImageList sx={{width: '100%', height: '100%', padding: '10px'}} className={styles.images} variant="quilted" cols={matchDownMd? 1 : 2} rowHeight={imageListItem}>
                                <ImageListItem><Image className={styles.imageListItems} src="/DentalLectureRoom2.png" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/EmptyDentalLectureRoom.png" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/DentalLectureRoomBefore.png" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/DentalLectureRoomBefore2.png" layout="fill"/></ImageListItem>
                            </ImageList>
                        </CardMedia>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <Card className={styles.card}>
                        <CardHeader title="UNDP School" titleTypographyProps={titleStyle} subheader="Contract No. P/AM 109-19" subheaderTypographyProps={subheadingStyle}/>
                        <CardMedia >
                            <ImageList sx={{width: '100%', height: '100%', padding: '10px'}} className={styles.images} variant="quilted" cols={matchDownMd? 1 : 2} rowHeight={imageListItem}>
                                <ImageListItem><Image className={styles.imageListItems} src="/SchoolAfter.jpg" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/SchoolAfter2.jpg" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/SchoolBefore.jpg" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/SchoolBefore2.jpg" layout="fill"/></ImageListItem>
                            </ImageList>
                        </CardMedia>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <Card className={styles.card}>
                        <CardHeader title="UNDP Police Station" titleTypographyProps={titleStyle} subheader="Contract No. P/AM 140-19" subheaderTypographyProps={subheadingStyle}/>
                        <CardMedia >
                            <ImageList sx={{width: '100%', height: '100%', padding: '10px'}} className={styles.images} variant="quilted" cols={matchDownMd? 1 : 2} rowHeight={imageListItem}>
                                <ImageListItem><Image className={styles.imageListItems} src="/PoliceStationAfter1.png" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/PoliceStationAfter2.png" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/PoliceStationBefore1.png" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/PoliceStationBefore2.png" layout="fill"/></ImageListItem>
                            </ImageList>
                        </CardMedia>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <Card className={styles.card}>
                        <CardHeader title="UNDP New Central Market" titleTypographyProps={titleStyle} subheader="Contract No. P/AM 319-18" subheaderTypographyProps={subheadingStyle}/>
                        <CardMedia >
                            <ImageList sx={{width: '100%', height: '100%', padding: '10px'}} className={styles.images} variant="quilted" cols={matchDownMd? 1 : 2} rowHeight={imageListItem}>
                                <ImageListItem><Image className={styles.imageListItems} src="/UNDPMarket.png" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/UNDPMarket2.png" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/UNDPMarketBefore.png" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/UNDPMarketBefore2.png" layout="fill"/></ImageListItem>
                            </ImageList>
                        </CardMedia>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <Card className={styles.card}>
                        <CardHeader title="Residential Renovation" titleTypographyProps={titleStyle} subheader="Walk-out Basement" subheaderTypographyProps={subheadingStyle}/>
                        <CardMedia >
                            <ImageList sx={{width: '100%', height: '100%', padding: '10px'}} className={styles.images} variant="quilted" cols={matchDownMd? 1 : 2} rowHeight={imageListItem}>
                                <ImageListItem><Image className={styles.imageListItems} src="/BasementRenoComplete.JPG" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/BasementRenoComplete2.JPG" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/BasementRenoBefore.JPG" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/BasementRenoBefore2.JPG" layout="fill"/></ImageListItem>
                            </ImageList>
                        </CardMedia>
                    </Card>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <Card className={styles.card}>
                        <CardHeader title="Dental Clinic" titleTypographyProps={titleStyle} subheader="Sky Dental (Ongoing)" subheaderTypographyProps={subheadingStyle}/>
                        <CardMedia >
                            <ImageList sx={{width: '100%', height: '100%', padding: '10px'}} className={styles.images} variant="quilted" cols={matchDownMd? 1 : 2} rowHeight={imageListItem}>
                                <ImageListItem><Image className={styles.imageListItems} src="/ActiveConstructionSkyDental2.png" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/ActiveConstructionSkyDental.png" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/Sky Dental Before.png" layout="fill"/></ImageListItem>
                                <ImageListItem><Image className={styles.imageListItems} src="/Sky Dental Before2.png" layout="fill"/></ImageListItem>
                            </ImageList>
                        </CardMedia>
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