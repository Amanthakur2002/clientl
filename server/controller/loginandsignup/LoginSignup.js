const connection = require("../../model/dbconnect");
const bcrypt = require('bcrypt');
const Jwt = require("jsonwebtoken");

const Login = (req, res) => {
    const email = req.body.email
    const sql = `SELECT * from customer WHERE email = ?`;
    connection.query(sql, [req.body.email],(err , data) => {
        if(err) return res.json({Error : "Login error in server"})
       console.log("email",email)
        if(data.length > 0){
            console.log("data",data)
            bcrypt.compare(req.body.password.toString(),data[0].password,( err , response) => {
                if(err) return res.json({"Status":"Password compare error"})
                if(response){
                    const name = data[0].name
                    const token = Jwt.sign( {name},'jwt-secret-key' , {expiresIn: '1d'} )
                    res.cookie('token',token)
                    res.cookie('email',email)
                    console.log(data)
                    console.log("first")                

                    return res.json({"Status":"Success"})
                } else {
                    return res.json({"Error":"Password not matched"})                    
                }
            })
        } else {
            return res.json({"Error": "No Email Existed"})
        }
    })
}


// const Register =  (req, res) => {
//     const sql = "INSERT into login(`name`,`email`,`password`,`mobile`) VALUES(?) "
    
//     bcrypt.hash( req.body.password.toString(),salt, (err, hash) =>{
//         if(err) return res.json({Error: "Error for hashing password"});
//         const values = [
//             req.body.name,
//             req.body.email,
//             req.body.mobile,
//             hash
//         ]    
//     connection.query(sql, [values], (err, result) => {
//         if(err) return res.json({Error: "Inserting data Error in server"})
//         return res.json({Status: "Success"});
//     })
// })
// }

const Register = async (req, res) => {
    console.log(req.body.password,"pass")
    console.log(req.body.name,"name")
    console.log(req.body.email,"email")
    console.log(req.body.mobile_no,"pass")
    try {
        const saltRounds = 10; // You can adjust the number of salt rounds

        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(req.body.password, salt);

        const sql = "INSERT INTO customer(`name`, `email`, `password`, `mobile`) VALUES(?, ?, ?, ?)";
        const values = [req.body.name, req.body.email, hash, req.body.mobile_no];

        const result = await connection.query(sql, values);

        return res.json({ Status: "Success" });
    } catch (err) {
        return res.json({ Error: "Error in server: " + err.message });
    }
}

module.exports = {Login,  Register }