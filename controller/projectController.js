let connection = require('../config/db'); 

let projectController={}

// VER LOS PRODUCTOS
projectController.viewProject=(req,res) =>{

    let sql=`SELECT * FROM project`;

    connection.query(sql,(err,resultsProject)=>{
        if(err)throw err;
        
        res.render('back', {resultsProject})
    })
}


// REGISTRAR Y GUARDAR UN PROYECTO
projectController.saveproject= (req, res)=>{
    
    // Viene del parametro del formulario
    let userid = req.params.userid;

    let github = req.file.filename;

    let {name, github_url} = req.body; 
    console.log(name); 
    console.log(github_url); 

    let sql = `INSERT INTO project (userid, name, github_url, url) 
    VALUES ('${userid}', '${name}', '${github_url}', ${url})`; 

    connection.query(sql, (error, result)=>{
        if(error) throw error; 
        res.status(200).redirect('back'); 
    })
}


// ELIMINAR PRODUCTO
projectController.delete = (req, res)=>{

    let userid = req.params.userid; 

    let sql = `DELETE FROM project WHERE userid = ${userid}`

    connection.query(sql, (error, result)=>{
        if(error) throw error; 
        res.redirect('back'); 
    })
}



module.exports = projectController; 



