const  express = require ("express")
const { signUpUser } = ("../controllers/userController")

const router = express.Router()

router.post("/signup", signUpUser)

export default router