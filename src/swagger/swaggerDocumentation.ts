export const swaggerDocumentation = {
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

export const swaggerOutputFile = "./src/swagger/swagger.json";
export const swaggerEndpointsFile = ["./src/app.ts"];
