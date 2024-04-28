import nodemailer from "nodemailer";


export default async function handler(req, res){
    const message = JSON.parse(req.body);

    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: process.env.NEXT_EMAIL,
            pass: process.env.NEXT_PASS
        }
    })
    const mailOptions = {
        from: "operations@ashbalgcconstruction.ca",
        to: "operations@ashbalgcconstruction.ca",
        subject: "New Client Request",
        html:`<h1>New Client Contact </h1>
        <ul>
            <li>${message.name}</li>
            <li>${message.email}</li>
            <li>${message.phoneNumber}</li>
        </ul>
        `
    }
    
    if (req.method == "POST"){
        transporter.sendMail(mailOptions, (err, info) => {
            if (err){
                res.status(404).json({error: `Email failed -- ${err}`});
            }else{
                res.status(200).json({success: `Message delivered! ${message}`});
            }
        });
    }
    
}