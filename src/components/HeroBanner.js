import styles from "@/styles/HeroBanner.module.css"
import { Button, ImageList, ImageListItem } from "@mui/material"
import {createTheme, ThemeProvider} from "@mui/material/styles"
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from "next/image";


const theme = createTheme({
    palette: {
        primary: {
            main: '#BCDB01'
        }
    }
});



export default function HeroBanner(){
    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));
    return(
        <>
        <div className={styles.main}>
            <div className={styles.leftDiv}>
                <h1 className={styles.linearwipe}>Building Dreams</h1>
                <h1 className={`${styles.linearwipe} ${styles.push}`}> Brick by Brick.</h1>
                <h2>Ashbal GC Construction Inc.</h2>
                <h3>Commercial & Residential Construction & Renovations</h3>
                <ThemeProvider theme={theme}><a href="tel:16477675951"><Button variant="contained">Contact Now</Button></a></ThemeProvider> 
            </div>
            <div className={`${styles.rightDiv}`}>
                <div>
                    <ImageList className={styles.images} sx={{width: 850, height: 600}} variant="quilted" cols={matchDownMd? 1 : 2} rowHeight={300}>
                        <ImageListItem ><Image className={styles.imageListItems} src="/DentalLectureRoom.png" layout="fill"/></ImageListItem>
                        <ImageListItem ><Image className={styles.imageListItems} src="/EmptyDentalLectureRoom.png" layout="fill"/></ImageListItem>
                        <ImageListItem cols={matchDownMd ? 1 : 2}><Image className={styles.imageListItems} src="/DentalLectureRoomBefore.png" layout="fill"/></ImageListItem>
                    </ImageList>
                    
                </div>
                
            </div>
        </div>
        </>
    )
}