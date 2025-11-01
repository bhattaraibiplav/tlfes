import next from "next";
import express from "express";
import backend from "./src/Backend/server.ts";


const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();

  server.use(backend);
                                    
  server.use((req, res) => handle(req, res));// Handle all other routes with Next.js;

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => console.log(`> Ready on http://localhost:${PORT}`));
});
