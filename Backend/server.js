const express = require('express')
const dotenv = ("dotenv")
const cookieParser = ("cookie-parser")
const mongoose = ("mongoose")
const userRoutes = ("./routes/userRoutes")

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "50mb" })); //parse json data inside the req body
app.use(express.urlencoded({ extended: true })); // parse form data inside the req body
app.use(cookieParser());

app.use("/api/users", userRoutes )

app.get("/", (req, res) => {
  res.send("Welcome Home 🏡");
});



mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Is 🏃‍♂️ On PORT ${PORT}`));
  })
  .catch((err) => console.log(err));
