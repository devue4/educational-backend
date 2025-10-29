const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();
require('./utils/db');

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/user", require("./routes/user"));
app.use("/api/news", require("./routes/news"));
app.use("/api/research", require("./routes/research"))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});