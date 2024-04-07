const express = require("express");
const cors = require("cors");

const app = express();

const userRouter = require("./routers/userRouter");
const ContactRouter = require("./routers/contactRouter")
const PluginRouter = require("./routers/pluginRouter")
const UtilRouter = require("./routers/util")

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json());
app.use("/user", userRouter);
app.use("/contact", ContactRouter);
app.use("/plugin", PluginRouter);
app.use("/util", UtilRouter);

const port = 5000;

app.use(express.static("./static/uploads"));

app.listen(port, () => {
  console.log("express server open");
});
