const app = require('express')();

app.get('/', (req, res) => {
  res.send('hey');
});

app.listen(process.env.PORT || 3000);

module.exports = app;