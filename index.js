const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', require('./api/main'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});