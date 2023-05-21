const mongoose = require("mongoose");
const app = require("./app");
const { DB_HOST } = require("./config");
// MgRWjoDBFCmoi9fU

// 3TwlrmzTJVdC29QL or this one

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
