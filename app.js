var express = require('express');
var app = express();

app.get('/', (req, res) => {
  const userAgent = req.headers["user-agent"]

  res.send(userAgent);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
