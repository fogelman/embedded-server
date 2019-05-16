const app = require('./server');
require('dotenv').config();

const port = process.env.PORT || 3000;

app.express.listen(port, () => {
  console.log(`Running on port ${port}`);
});
