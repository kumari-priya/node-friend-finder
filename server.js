// Bring in our dependencies
const app = require('express')();

const bodyParser = require("body-parser");
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");

// Dedicate the PORT
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//  Connect all our routes to our application
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
