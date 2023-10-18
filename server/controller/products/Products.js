const connection = require("../../model/dbconnect");

const getProducts = async(req,res) =>{  
    // console.log(userData);
    // let sqlQuery =`Select products.* , product_description.description , product_description.weight , product_description.colour from products JOIN product_description ON products.product_id = product_description.product_id;`;
    let sqlQuery =`select * from products;`;

        await connection.query(sqlQuery,function(error,result) {
        if(error){
            console.log("error", error.sqlMessage);
        }
          else{
            res.json(result);
     console.log("query run",result)
        }
    }
     )}

const getProductsOne = async(req,res) =>{

  const product_id = req.query.id;
    // console.log(userData);
    let sqlQuery =`Select products.* , product_description.description , product_description.weight , product_description.colour from products JOIN product_description ON products.product_id = product_description.product_id WHERE products.product_id=?`;

        await connection.query(sqlQuery,[product_id],function(error,result) {
        if(error){
            console.log("error", error.sqlMessage);
        }
          else{
            res.json(result);
     console.log("query run",result)
        }
    }
     )
}

module.exports = { getProducts, getProductsOne }