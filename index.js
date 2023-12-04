require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const { errors } = require("celebrate");
const cors = require("cors");
const { limiter } = require("./middlewares/limiter");

const { PORT = 3000 } = process.env;
const app = express();
const router = require("./routes/router");
const { requestLogger, errorLogger } = require("./middlewares/Logger");

const errorCheck = require("./middlewares/errorCheck");
const { MONGO_DB } = require("./utils/config");

mongoose.connect(MONGO_DB);

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(requestLogger);

app.use(limiter);
app.use(router);

app.use(errorLogger);
app.use(errors());
app.use(errorCheck);
app.listen(PORT);
