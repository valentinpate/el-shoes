const mysql = require("mysql")
require("dotenv").config()

const dbConfig = {
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
}

const connection = mysql.createConnection(dbConfig)

module.exports.register_post=(req,res)=>{
    let emailAndPhone = req.body.emailPhone
    let name = req.body.name
    let password = req.body.password

    if(!emailAndPhone, !name, !password){
        res.sendFile("C:/Users/VP/Desktop/signup-shoes/public/no-data.html")
    }

    if(emailAndPhone && name && password){
        connection.query("INSERT INTO login (emailphone, name, password) VALUES (?, ?, ?);", [emailAndPhone, name, password], (error, resultado, fields)=>{
            if(error) throw error;
            if(resultado.length>0){
                console.log("El usuario se encuentra")
            }else{
                console.log("El usuario no se encuentra")
            }
            res.send("<h1>"+ "Thanks for creating your account, " + name + "!" + "</h1>")
        })
    }
}

module.exports.login_post=(req,res)=>{
    let nameLog = req.body.nameLog
    let passwordLog = req.body.passwordLog

    if(!nameLog, !passwordLog){
        res.sendFile("C:/Users/VP/Desktop/signup-shoes/public/no-data.html")
    }

    if(nameLog && passwordLog){
        connection.query("SELECT * FROM login WHERE name = ? AND password = ?", [nameLog, passwordLog], (error, resultado, fields)=>{
            if(error)throw error;
            if(resultado.length>0){
                console.log("El usuario se encuentra")
                res.send("<h1>"+ "Welcome back, " + nameLog + "!" + "</h1>")
            }else{
                console.log("El usuario no se encuentra")
                res.redirect("/no_login.html")
            }
            res.end()
        })
    }
}