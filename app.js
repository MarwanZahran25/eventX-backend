const express = require("express");
const cors = require("cors");
const verify = require("./utils/verify");
const app = express();
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/user", userRouter);

app.use("/admin", adminRouter);
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
