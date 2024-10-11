require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const cors = require("cors");
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(bodyParser.json());

const mongoUrl = process.env.DB_URL;

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

const CustomerRoute = require("./Routes/CustomerRoutes");
const InvoiceRoute = require("./Routes/InvoiceRoutes");
const InvoiceWoithoutGSTRoute = require("./Routes/InvoiceWithoutGSTRoutes");
const BranchRoute = require("./Routes/BranchRoutes");
const InvoiceNumboerRoute = require("./Routes/NumberGstRoutes");
const InvoiceNumberGstRoute = require("./Routes/NumberNonGstRoutes");
const UserRoute = require("./Routes/UserRoutes");
const CompanyRoute = require("./Routes/CompanyRoutes");
const verifyToken = require("./Controller/Middlware/AuthMiddleware");
const print = require("./Routes/PrintRouters");
const printwithoutgst = require("./Routes/PrintWithoutGstRoutes");
const bank = require("./Routes/BankRoutes");
const mode = require("./Routes/ModeRoutes");
const State = require("./Routes/StateRoutes");
const LivePrice = require("./Routes/LivePriceRoutes");

app.use("/api/auth", UserRoute);
app.use("/api/customer", verifyToken, CustomerRoute);
app.use("/api/state", State);
app.use("/api/liveprice", LivePrice);

app.use("/api/invoice", verifyToken, InvoiceRoute);
app.use("/api/invoicewithoutgst", verifyToken, InvoiceWoithoutGSTRoute);

app.use("/api/branch", verifyToken, BranchRoute);
app.use("/api/invoiceid", InvoiceNumboerRoute);
app.use("/api/invoicegst", InvoiceNumberGstRoute);
app.use("/api/company", verifyToken, CompanyRoute);
app.use("/api/print", verifyToken, print);
app.use("/api/printwithoutgst", verifyToken, printwithoutgst);
app.use("/api/bank", verifyToken, bank);
app.use("/api/mode", verifyToken, mode);

app.listen(port, () => {
  console.log(`${port} Server started...`);
});
