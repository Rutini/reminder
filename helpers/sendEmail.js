const nodemailer = require("nodemailer");

module.exports = async (event) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            service: "gmail",
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.USER_ADDRESS, // generated ethereal user
                pass: process.env.USER_PASSWORD // generated ethereal password
            }
        });

        const {about, event_date, email} = event;

        if(!email) throw new Error('Email address missed!');

        const text = `${about} \n At ${event_date}`;

        await transporter.sendMail({
            from: process.env.USER_ADDRESS,
            to: email,
            subject: 'Remind',
            text: text
        }, err => {
            err ? console.log(err) : console.log(`Remind sent to ${email}`);
        });

    } catch (e) {
        console.log(e.message);
    }
};
