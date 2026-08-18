import express from "express";
import { createServer } from "http";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath, { index: false, redirect: false }));

  app.get("*", (req, res) => {
    const requestedCategory = typeof req.query.category === "string" ? req.query.category : undefined;
    const categoryKeys = new Set(["transport", "itinerary", "travel-guide", "destinations", "local-info"]);
    if (req.path === "/articles" && requestedCategory && categoryKeys.has(requestedCategory)) {
      res.redirect(301, `/articles/${requestedCategory}`);
      return;
    }
    if (req.path === "/articles") {
      res.redirect(301, "/articles/transport");
      return;
    }
    const normalizedPath = req.path === "/" ? "" : req.path.replace(/^\/+|\/+$/g, "");
    const prerenderedPath = normalizedPath ? path.join(staticPath, normalizedPath, "index.html") : path.join(staticPath, "index.html");
    if (fs.existsSync(prerenderedPath)) {
      res.sendFile(prerenderedPath);
      return;
    }
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
