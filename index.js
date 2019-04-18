require ("honeycomb-beeline")({
  writeKey: "WRITEKEY",
  dataset: "buzz-test"
});

const express = require ('express')
const app = express ()
const port = 3000

app.get ('/', (req, res) => res.send ('Hello World!'))

app.listen(port, () => console.log (`Started on ${port}!`))