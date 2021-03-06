const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true} );
const conn = mongoose.connection;
conn.once('open', () => {
    console.log("Mongodb connection established successfully");
}, 'error', (error) => {
    console.log(error);
});

const voterRoutes = require('./routes/voters');
app.use('/voters', voterRoutes)

const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

const candidateRoutes = require('./routes/candidates');
app.use('/candidates', candidateRoutes);

const localeRoutes = require('./routes/locale');
app.use('/locale', localeRoutes);

const superAdminRoutes = require('./routes/superAdmin');
app.use('/superAdmin', superAdminRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

