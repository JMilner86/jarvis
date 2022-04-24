var nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport( {
    service: "hotmail",
    auth: {
        user: 'hellofromjarvis@outlook.com',
        pass: 'jarvis123'
    }
});

const options = {
    from: 'hellofromjarvis@outlook.com',
    to: 'jordan.m.edginton@gmail.com',
    subject: 'Email with nodemailer test',
    test: "test!"
};

transporter.sendMail(options, function (err, info) {
    if (err){
        console.log(err);
        return;
    }
    console.log('Sent ' + info.response);
})