const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

const corsOption = {
    origin: ["https://api-docs-swagger1.onrender.com", "https://render.com" ],
};
app.use(cors(corsOption));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Loaders
const { connectMongoDB, swagger } = require('./loaders')
connectMongoDB();
swagger(app);


// Routes
const IndexRouter = require('./routes');

// Utils
const { consoleRequest } = require('./utils');


app.use(consoleRequest);
app.use('/api/v1', IndexRouter);

server.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
});
