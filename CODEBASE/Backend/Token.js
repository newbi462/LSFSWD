// 1) INSTALL:
npm install bcryptjs
npm install jsonwebtoken

// 2) ADD DEPENDANCY TO  TO ROUTES
const bcryptjs = require('bcryptjs'); // dependancy for hash of pass best bpractice
const jwt = require('jsonwebtoken');// DEPENDANCY FOR TOKENS

// 3) Make your secret middle ware
const { jwtSecret } = require('../config/secrets.js')
//in my middle ware file
function signToken(user) {
  const payload = {
    house: user.house
  };

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, myMidWare.jwtSecret, options);
}
//this funtion in the ROUTE like middle ware

// 4) set up end points
// REGISTER USER:
router.post("/register", (request, responce) => {
  let userObj = request.body;
  const hash = bcryptjs.hashSync(request.body.password, 8);// 2^8 hash
  userObj.password = hash;// based on what I called this in my table object

  UserModel.addUser(userObj)
    .then(saved => {
      responce.status(201).json(saved);
    })
    .catch(error => {
      responce.status(500).json(error);
    });
});

//START OF STEP 3 MODEL FUNTIONS
function findUserById(id) {
  return db('users')
    .where({ id })
    .first();
}

function addUser(userObj) {
  return db("users")
    .insert(userObj, "id")
    .then(ids => {
      const [id] = ids;
      return findUserById(id);
    });
}
//END OF STRP 3 MODLE FUNTIONS


//LOG IN USER
router.post("/login", (request, responce) => {
  let { username, password } = request.body;

  UserModel.findByProp({ username }).first()//first() assumes user is the first find
    .then(userObj => {
      if (userObj && bcryptjs.compareSync(password, userObj.password)) {
        const token = signToken(userObj); // <<<<<<<<<<<
        //responce.status(200).json({ token }); // <<<<<<<<<<
        responce.status(200).json(
          {
            message: `Welcome ${userObj.username}!, you are Logged In`,
            tokenMeg: token
          }
        );
      } else {
        responce.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch(error => {
      responce.status(500).json(error);
    });
});
//START LOGIN MODLE FUNTIONS
function findByProp(filterBy) {
    return db('users').where(filterBy);
}
//END LOGIN MODLE FUNTIONS



// 5) middle ware to verify token for protected routes
function isLoggedIn(request, responce, next) {
  const token = request.headers.authorization;

  if(token) {
    jwt.verify(token, myMidWare.jwtSecret, (error, decodedToken) => {
      if(error) { // the token is not valid
        responce.status(401).json({ you: "can't touch this!"})
      } else { //request.user = { house: decodedToken.house };
        next();
      }
    })
  } else {
    responce.status(401).json({ you: 'shall not pass!'})
  }
}
