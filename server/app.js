const express  = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// 배포시 변경
const corsOptions = {
    origin: 'http://localhost:3000'
};

const PORT = process.env.PORT || 8080;

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./app/mongodb/route/route.js'));

const db = require('./app/mongodb/model/index.js');
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('db.url', db.url);
    console.log('db.mongoose', db.mongoose);
    console.log('db.tutorial.db', db.tutorial.db);
    console.log('Database Connection Success.');
  })
  .catch(err => {
    console.log('Database Connection Failure.', err);
    process.exit();
  });

  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
  })