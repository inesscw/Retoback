let connection = require('../config/db'); 
const sha1 = require('sha1');


let userController={}; 

    // FORMULARIO REGISTRO (se abriria una vista html de registro)
    userController.Register = (req, res)=>{
        res.render('register'); 
    }

    // FORMULARIO LOGIN (Se abriria una vista html de login)
    userController.login = (req, res)=>{
        res.render('login'); 
    }


    // Guardar
    userController.submit = (req, res)=>{
        // Declarar archivo aqui 
        let github1 = req.file.filename
    
        let {name, username, email, password, github}=req.body;

        // Encriptar contraseña (declarando sha1)
        const encPassword = sha1(password);

          // Declarar lo d la bdd                   
        let sql= `INSERT INTO user (name, username, email, password, github) 
        VALUES ('${name}','${username}','${email}', '${encPassword}','${github}') `
    
        connection.query(sql, (err, result)=>{
            if(err)throw err; 
            res.redirect('/home')
        })
    }


module.exports=userController; 