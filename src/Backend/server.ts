    import express from "express";
    import helloRoute from "./routes/hello.ts";

    const backend = express();

    backend.use(express.json());
    backend.use("/api", helloRoute);

    export default backend;
