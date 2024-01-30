require("dotenv").config()
const express = require("express")
const expressLayout = require("express-ejs-layouts")
const cookiparser = require("cookie-parser")
const mongoStore = require("connect-mongo")
// const methodOverride = require('method-override');
// const session = require("express-session")


const connectDB = require("./server/config/db")

const app = express()
const PORT = 5000 || process.env.PORT

//connect database
connectDB()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(express.static("public"))
app.use(expressLayout)
app.use(cookiparser())
// app.use(methodOverride('_method'));

// app.use(session({
//   secret:'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   store: mongoStore.create({
//     mongoUrl:process.env.MONGODB_URI
//   }),
//   // cookie: {maxAge: new Date (Date.now()+(3600000))} 
// }))

 
app.set("layout", "layouts/main")
app.set("view engine","ejs")


app.use("/",require("./server/routes/main"))


app.listen(PORT,()=>{
  console.log(`app is lisrening to port ${PORT}`);
})






