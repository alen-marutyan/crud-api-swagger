const swagger = (app) => {
    const swaggerUI = require("swagger-ui-express");
    const swaggerJsDoc = require("swagger-jsdoc");

    const options = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "Library API",
                version: "1.0.0",
                description: "A simple Express Library API"
            },
            servers: [
                {
                    url: "http://localhost:5000"
                }
            ]
        },
        apis: ["./routes/*.js"]
    };

    const specs = swaggerJsDoc(options);

    app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
}

module.exports = swagger;
