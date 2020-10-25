const express = require('express');
const cors = require('cors');
const assetRouter = require('./routes/asset');
const liabilityRouter = require('./routes/liability');
const currencyRouter = require('./routes/currency');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/assets', assetRouter);
app.use('/liabilities', liabilityRouter);
app.use('/currencies', currencyRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});