const keys = require("../config/keys");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(keys.sendGridApiKey);

async function send(survey, template) {

  const msg = {
    to: 'onlinestuffs2000@gmail.com',
    from: 'onlinestuffs2000@gmail.com', // Use the email address or domain you verified above
    subject: 'testing testing testing!',
    text: 'easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  try {
    const mail = await sgMail.send(msg);
  } catch (error) {
    console.log(error.message);
    if (error.response) {
      console.error(error.response.body);
    }
  }
}

module.exports = {
  send
}
