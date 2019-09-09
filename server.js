require('dotenv').config()

const { app } = require('./src/app');
const { query } = require('./src/db');
const { Accounts, UnverifiedAccounts } = require('./src/db/queries');

const port = process.env.API_SERVER_PORT;

query(Accounts)
.then(() => {
    return query(UnverifiedAccounts);
})
.then(() => {
    app.listen(port, () => console.log(`Example app listening on port ${port}`));
})
.catch(err => console.error(err.stack))