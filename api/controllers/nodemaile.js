const 
    nodemailer = require('nodemailer'),
    keys = require('../../config/keys'),
    transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: 'gmail',
        port: '587',
        secure: false,
        auth: {
            user: "noytest.test@gmail.com",
            pass: keys.mdpMailer
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    module.exports = {


        contactNodeMailer : (req,res) => {


            mailOptions = {

                from: 'noytest.test@gmail.com',
                to: 'thibault.gabillard@protonmail.com',
                subject: `Portfolio contact de ${req.body.name}`,
                html: `contenu : ${req.body.contenu} <br> email: ${req.body.email} <br> téléphone :${req.body.tel}`

            }
    
    
            transporter.sendMail(mailOptions, (err, res, next) => {
    
    
                if (err) {
    
                    res.redirect('back')
    
                } else {
    
                    next()
    
    
                }
    
            })
    
            req.flash('mdpOublierC', '.')
            res.redirect('/')
            
            
        }

    }
