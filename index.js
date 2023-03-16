const db = require("./config/db");
const app = require("./app");
const port = 9000;

db.connect()
  .then(() => {
    app.listen(port, () => {
      console.log("Server listening at ", port);
    });
  })
  .catch((err) => {
    console.log("ERROR", err);
  });
