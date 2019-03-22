const app = require('express')();

app.get('/', (req, res) => {
  res.send('/');
});

app.listen(process.env.PORT || 3000);

module.exports = app;