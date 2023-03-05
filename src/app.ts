import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import dotenv from "dotenv";

import swaggerAutogen from "swagger-autogen";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger/swagger_output.json";

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
const doc = {
    info: {
        version: "", // by default: '1.0.0'
        title: "", // by default: 'REST API'
        description: "", // by default: ''
    },
    host: process.env.DB_HOST, // by default: 'localhost:3000'
    basePath: "", // by default: '/'
    schemes: [], // by default: ['http']
    consumes: [], // by default: ['application/json']
    produces: [], // by default: ['application/json']
    tags: [
        // by default: empty Array
        {
            name: "", // Tag name
            description: "", // Tag description
        },
        // { ... }
    ],
    securityDefinitions: {}, // by default: empty object
    definitions: {}, // by default: empty object (Swagger 2.0)
    components: {}, // by default: empty object (OpenAPI 3.x)
    openapi: "", // by default: '3.0.0'
};

const outputFile = "./src/swagger/swagger_output.json";
const endpointsFiles = ["./src/app.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
