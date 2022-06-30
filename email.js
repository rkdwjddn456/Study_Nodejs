const nodemailer = require('nodemailer')
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0ab32d83946ae9",
      pass: "e422b2c94ebb57"
    }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error) {
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: "dhrn456@naver.com",
    to: "dhrn456@naver.com",
    subject: "테스트 메일입니다.",
    text: "node js 테스트"
}

send(email_data);