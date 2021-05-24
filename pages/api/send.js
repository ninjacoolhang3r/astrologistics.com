const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_ACCESS_TOKEN)
    console.log(process.env.NEXT_PUBLIC_SENDGRID_ACCESS_TOKEN)
  const { email, message, subject, name } = req.body

  console.log(req.body)

  const content = {
    to: 'anthonymedina958@gmail.com',
    from: email,
    subject: subject,
    text: message,
    html: `<p>From <strong>${name}</strong></p><br></br><p>${message}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}