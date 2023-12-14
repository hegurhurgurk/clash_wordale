const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log(req.ip);
  res.sendFile(path.join(__dirname, "/public/html/index.html"));
});

app.post('/guess', (req, res) => {

});

// serve css files, images, js
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
