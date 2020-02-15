const express = require("express");
const GraphqlHttp = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");

const app = express();

// allow cross-origin
app.use(cors());

app.use(
  "/graphql",
  GraphqlHttp({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
