const express = require('express')
const cors = require("cors")
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")


const app = express()

const port = 8050;

app.use(cors({
    origin : ["http://localhost:3000","http://localhost:3001","http://localhost:3002","http://localhost:3004"],
    methods: ["POST", "GET" , "PATCH" , "PUT"],
    credentials: true,
    httpOnly: true 
 }));

 app.use(bodyParser.json())
 app.use(cookieParser())

const productRouter = require('./routes/products/Products_routes');
const cartRouter = require('./routes/cart/Cart_routes');
const loginAndSignupRouter = require('./routes/loginandsignup/LoginandSignup')

app.use('/api/customer', productRouter);
app.use('/api/customer', cartRouter);
app.use('/api/customer', loginAndSignupRouter);

app.listen(port, ()=>{
    console.log(`server is running on port no. ${port}`)
})

