const connection = require("../../model/dbconnect");

// function generateUniqueCartId() {
//     const timestamp = new Date().getTime(); // Get the current timestamp
//     const random = Math.floor(Math.random() * 1000000); // Generate a random number
  
//     // Combine the timestamp and random number to create a unique cart_id
//     const cart_id = `${timestamp}-${random}`;
  
//     return cart_id;
//   }
//   const uniqueCartId = generateUniqueCartId();

// const AddtoCart = async (req, res) => {

//   function generateUniqueCartId() {
//     const timestamp = new Date().getTime(); // Get the current timestamp
//     const random = Math.floor(Math.random() * 1000000); // Generate a random number
  
//     // Combine the timestamp and random number to create a unique cart_id
//     const cart_id = `${timestamp}-${random}`;
  
//     return cart_id;
//   }
//   const uniqueCartId = generateUniqueCartId();
    
//     console.log("pro",req.query.product_id)
//     const quantity = "1";
//     const cart_id =uniqueCartId;
    
//     let userData = [
//         cart_id,
//         req.query.product_id,
//         quantity,


//    ];
//     console.log(userData);
//     let sqlQuery = `insert into cart(cart_id, product_id, quantity) values(?,?,?)`;
  
//     await connection.query(sqlQuery, userData, function (error, result) {
//       if (error) {
//         console.log("error", error.sqlMessage);
//       } else {
//         res.json(result);
//       }
//     });
//   };



const AddtoCart = async (req, res) => {
    const email = req.cookie.email
    let userData = [
      email,
        cart_id,
        req.query.product_id,
        addedon = "NOW()",
        quantity = "1"
   ];
    console.log(userData);
    let sqlQuery = `INSERT INTO cart (cart_id, product_id, addedon, quantity) VALUES ((SELECT cart_id FROM cart_id WHERE mobile_no = (SELECT mobile_no FROM customer WHERE email=${email}) AND status = 'active'),{product_id},${addedon},${quantity});`;
  
    await connection.query(sqlQuery, userData, function (error, result) {
      if (error) {
        console.log("error", error.sqlMessage);
      } else {
        res.json(result);
      }
    });
  };

  module.exports =  { AddtoCart }
