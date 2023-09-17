
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");


const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));


//setup nodemailer with mail
// let contactEmail = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//         user: "8cce9b9fd9fd83",
//         pass: "626fe25df90aad",
//     },
// });

let contactEmail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
        user: "cmsbdtask@gmail.com",
        pass: "uvumtlfbxoskfvkv",
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

//sent the mail through the nodemailer
router.post("/contact", (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;
    let subject = req.body.subject;

    let mail = {
        from: email,
        to: "maipalash35@gmail.com",
        subject: subject,
        html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });

});

router.post("/hire-me", (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let category = req.body.category;
    let description = req.body.description;

    let mail = {
        from: email,
        to: "maipalash35@gmail.com",
        subject: "From LikeAshraful.com Hire Me",
        html: `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Category: ${category}</p>
            <p>Description: ${description}</p>`
    };

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({ status: "ERROR" });
        } else {
            res.json({ status: "Message Sent" });
        }
    });

})
