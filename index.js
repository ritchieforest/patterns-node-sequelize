const express = require('express')
//##############config routes###############
const login=require('./routes/LoginRoute')
//#########################################
const app = express()

app.set('port', process.env.PORT || 5000);
//app.set(body.parser)
app.set('trust proxy', true);
app.use(express.json());

//#############Routes#######################
app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err)
    }
  
    return res.status(500).json(err)
  })

app.use("/login",login);


//#########################################

app.listen(app.get("port"))
