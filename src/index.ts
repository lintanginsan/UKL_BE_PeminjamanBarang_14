import  Express  from "express";
import UserRoute from "./router/userRoute";
import ItemRoute from "./router/itemRoute";
import BorrowRoute from "./router/borrowRoute"
const app = Express()
app.use(Express.json())
app.use(`/user`, UserRoute)
app.use(`/item`, ItemRoute)
app.use(`/borrow`, BorrowRoute)

const PORT = 2000
app.listen(PORT, () => {
    console.log( `Server run on port ${PORT}`)
})