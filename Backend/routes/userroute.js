import express from "express"
import {loginUser,registerUser} from "../controllers/usercontroller.js"


const userRouter = express.Router()

userRouter.post("/register",registerUser)
// ... existing code ...
userRouter.post("/login", loginUser)
// ... existing code ...


export default userRouter;