const mongoose = require("mongoose");
const app = require("./app");
// MgRWjoDBFCmoi9fU

// 3TwlrmzTJVdC29QL or this one
const DB_HOST =
  "mongodb+srv://Valeriia_Frolova23:3TwlrmzTJVdC29QL@cluster0.g5vf6ac.mongodb.net/my_contacts?retryWrites=true&w=majority";

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
