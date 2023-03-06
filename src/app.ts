import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import dotenv from "dotenv";

import swaggerAutogen from "swagger-autogen";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger/swagger.json";
import {
    swaggerOutputFile,
    swaggerEndpointsFile,
    swaggerDocumentation,
} from "./swagger/swaggerDocumentation";

import router from "./routes/routes";

dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(router);

// Swagger
swaggerAutogen(swaggerOutputFile, swaggerEndpointsFile, swaggerDocumentation);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(
        `Currently running in ${process.env.NODE_ENV} mode. \nServer is running on port ${PORT}. \nProject is running on url: http://${process.env.DB_HOST}:${PORT}. \nSwagger is running on url: http://${process.env.DB_HOST}:${PORT}/swagger`,
    );
});
