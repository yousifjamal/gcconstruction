import styles from "@/styles/HeroBanner.module.css"
import { Button, ImageList, ImageListItem } from "@mui/material"
import {createTheme, ThemeProvider} from "@mui/material/styles"
import Image from "next/image";

const theme = createTheme({
    palette: {
        primary: {
            main: '#BCDB01'
        }
    }
});

export default function HeroBanner(){
    return(
        <>
        <div className={styles.main}>
            <div className={styles.leftDiv}>
                <h1 className={styles.linearwipe}>Your Clinic.</h1>
                <h1 className={styles.linearwipe}>Your way.</h1>
                <h2>Ashbal GC Construction Inc.</h2>
                <h3>Walk-in & Dental Clinic Construction & Renovations</h3>
                <ThemeProvider theme={theme}><Button variant="contained">Contact Now</Button></ThemeProvider> 
            </div>
            <div className={styles.rightDiv}>
                <div>
                    <ImageList className={styles.images} sx={{width: 800, height: 600}} variant="quilted" cols={2} rowHeight={300}>
                        <ImageListItem><Image className={styles.imageListItems} src="/DentalLectureRoom.png" layout="fill"/></ImageListItem>
                        <ImageListItem ><Image className={styles.imageListItems} src="/EmptyDentalLectureRoom.png" layout="fill"/></ImageListItem>
                        <ImageListItem cols={2}><Image className={styles.imageListItems} src="/ActiveConstructionSkyDental.png" layout="fill"/></ImageListItem>
                    </ImageList>
                    
                </div>
                
            </div>
        </div>
        </>
    )
}