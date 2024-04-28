const nodemailer = require('nodemailer');


export default async function handler(req, res){
    const message = req.body;

    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
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

    transporter.sendMail(mailOptions, (err, info) => {
        if (err){
            res.status(404).json({error: `connection refused at ${info.address}`});
        }else{
            res.status(200).json({success: `Message delivered to ${info.accepted}`});
        }
    });
}