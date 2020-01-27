//1) MAKE YOUR FUNTION TO USE/BE MIDDLE WARE
//CUSTOME MILLEWHARE/HANDLE FUNCTIONS OR INPORTS OF
function logger(request, responce, next) {
  const { method, originalUrl } = request;
  console.log(`${method} to ${originalUrl} at ${Date(Date.now())}`);

  next();
}// NOTE next() to run to next taks, with out it this will just site here


//2) LOAD THE FUNTIONS WITH USE
//MIDDLE WARE
server.use(express.json());
server.use(logger); // logger == logger(), WHEN USING FUNCTION GLOBALY,
//not needed when not global


//3) LOAD IT IN THE PATH TO USE, IN THE "MIDDLE"
//GLOBAL
server.get('/', logger, (req, res) => {
  res.send(`<h2>NO BE HAPPY THAT WAS AT BEST DISTRACKING, it would have been more apropriate to post in slack 20 min before</h2>`);
});



//IN ROUTE EXSAMPLE
//HELPER/MIDDLEWARE
function validateProjectId(request, responce, next) {
  //
  ProjectModel.get(request.body.project_id)
    .then(projectID => {
      if (projectID != null) {
        next();
      } else {
        console.log(error);
        responce.status(500).json(
          {
            error: "This is not a valid Project ID."
          }
        )
      }
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json(
        {
          error: "This is not a valid Project ID."
        }
      )
    })
};

//IMPORT TO PATH
router.post('/', validateProjectId, (request, responce) => {
  const resourceObject = request.body;
  ActionModel.insert(resourceObject)
    .then(newlyCreatedResource => {
      responce.status(200).json(newlyCreatedResource);
      //console.log(newlyCreatedResource);
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json(
        {
          error: "insert() could create this in the DB. A valid project ID, notes string, and description string are all requiered."
        }
      )
    })
});
