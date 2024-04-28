import styles from "@/styles/ContactUs.module.css";
import { createTheme,ThemeProvider, useTheme, Button, useMediaQuery} from "@mui/material";

import { FormGroup } from "@mui/material";
import  FormControl  from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";

import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
      primary: {main: '#BCDB01'}
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': '#c9c9c9',
            '--TextField-brandBorderHoverColor': '#BCDB01',
            '--TextField-brandBorderFocusedColor': '#c9c9c9',
            '& input':{
                color: 'var(--TextField-brandBorderColor)',
            },
            '& label': {
                color: 'var(--TextField-brandBorderColor)',
              },
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderHoverColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
          },
        },
      },
    },
});

export default function ContactUs(){
    
    useEffect(() => {
        Aos.init();
    }, []);

    const matchDownMd = useMediaQuery('max-width: 700px');
    const outerTheme = useTheme();


    //mailing functionality
    const sendMail = async (e) => {
      e.preventDefault();
      const messageContent = JSON.stringify({
        name: document.getElementById('nameInput').value,
        email: document.getElementById('emailInput').value,
        phoneNumber:document.getElementById('phoneInput').value
      });

      const response = await fetch("/api/mailer", {method: "POST", body: messageContent});

      console.log(await response.json());
      console.log(process.env.USER);
    };

    return (
        <>
        <div data-aos="fade-up" className={styles.main}>
            <div data-aos="fade-right" className={styles.leftDiv}>
                <h1>Create Your </h1>
                <h1 ><span className={styles.greenify}>Special Space.</span></h1>
                <h2>Connect With Our Industry-Trusted Contracting Team Today!</h2>
            </div>

            <Card data-aos="fade-left" className={styles.cardcontainer}>
                <CardHeader className={styles.cardHeader} title="Contact Now" titleTypographyProps={{fontSize: matchDownMd ? '25px': '55px',color: 'white', fontWeight: 'bold', textAlign: "center"}}/>
                <CardContent >
                    <ThemeProvider theme={customTheme(outerTheme)}>
                        <FormGroup className={styles.cardcontents}>
                            <FormControl>
                                <TextField id='nameInput' label="Name" variant="outlined"/>
                            </FormControl>
                            <FormControl>
                                <TextField id='emailInput' label="Email"/>
                            </FormControl>
                            <FormControl>
                                <TextField id='phoneInput' label="Phone Number"/>
                            </FormControl>
                            <Button onClick={sendMail} variant="contained">Send Email</Button>
                        </FormGroup>
                    </ ThemeProvider>
                </CardContent>
            </Card>
        </div>
        </>
    );
}