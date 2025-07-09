import express from "express";
import usersRouters from "./routers.js";


const ExpressServer = express();

ExpressServer.use(express.json())

ExpressServer.use("/users", usersRouters)

ExpressServer.listen(8790, ()=> console.log("Im listing to you at port 8790 👁️")
);

