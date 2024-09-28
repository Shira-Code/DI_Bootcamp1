const express = require("express");
const userRouter = require("./routes/userRouter.js");

const app = express();
/**body parser */
app.use(express.json());

app.use("/user", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});


