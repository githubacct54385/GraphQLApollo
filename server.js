const express = require("express");
const GraphqlHttp = require("express-graphql");
const schema = require("./schema");

const app = express();

app.use(
  "/graphql",
  GraphqlHttp({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
