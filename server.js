require('dotenv').config()

const app = require('./src/app').app;
const port = process.env.API_SERVER_PORT;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));