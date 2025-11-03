    import express from "express";
    // import {seed} from "../Database/seed.ts";

    const backend = express();

    backend.use(express.json());

    // backend.get("/api/add/teacher", (req, res) => {
    //     seed().then(() => {
    //         res.status(200).send("Database seeded successfully");
    //     }).catch((Error: any) => {
    //         res.status(500).send("Error seeding database: " + Error.message);
    //     });
    // });
    export default backend;
