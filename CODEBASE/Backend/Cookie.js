//1) INSTALL pacs
// npm install express-session
// npm install connect-session-knex

// 2) Add to server dependancy
const session = require("express-session"); // install
const KnexSessionStore = require("connect-session-knex")(session);// install

// 3) imoirt Kenex DB config file
const db = require('./data/db.js');

// 4) create the session in the server file
const server = express();

const sessionConfig = {
  name: "fooBar",// what you want it called this is FOOBAR
  // secret is used for cookie encryption
  secret: process.env.SESSION_SECRET || "keep it secret, keep it safe!",
  cookie: {
    maxAge: 1000 * 60 * 10, // 10 minutes in ms
    secure: false, // set to true in production, only send cookies over HTTPS
    httpOnly: true, // JS cannot access the cookies on the browser
  },
  resave: false,
  saveUninitialized: true, // read about it for GDPR compliance
  store: new KnexSessionStore({
    knex: db,//see above inport
    tablename: "sessions",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 60000,
  }),
};

// 5) Satisiy  .use()
server.use(session(sessionConfig)); // turn on sessions
// see above "const session" and "const sessionConfig = {"

//6) make veridiy middle ware
function isLoggedIn(request, responce, next) {
  if (request.session && request.session.loggedIn) {
    next();
  } else {
    responce.status(401).json({ you: "shall not pass!" });
  }
}
// call this on roughts you need to veriify session

// 7) add session "loggedIn" to session when user logs in
UserModel.findByProp({ user }).first()//first() assumes user is the first find
  .then(userObj => {
    if (userObj && bcryptjs.compareSync(password, userObj.password)) {
      console.log(password);
      console.log(userObj.password);

//THIS NEXT LINE
      request.session.loggedIn = true; // used in isLoggedIn() middleware
      // if (user) {
      // compare().then(match => {
      //   if (match) {
      //     // good password
      //   } else {
      //     // they don't match
      //   }
      // }).catch()
      responce.status(200).json({ message: `Welcome ${userObj.user}!, you are Logged In` });
    } else {
      responce.status(401).json({ message: "You shall not pass!" });
    }
  })
  .catch(error => {
    responce.status(500).json(error);
  });
});


// 8) make a LOG OUT in your ROUTES
router.get("/logout", (request, responce) => {
  if (request.session) {
    request.session.destroy(error => {
      if (error) {
        responce.status(500).json({
          you: "can checkout any time you like, but you can never leave!",
        });
      } else {
        responce.status(200).json({ bye: "thanks for playing" });
      }
    });
  } else {
    responce.status(204);
  }
});
