const Resource = require('./model')

function validateName(req,res,next) {
  Resource.findByName(req.body.resource_name)
    .then(result => {
      if(result != null){
        res.status(404).json({ message: 'The name you input is already in use.'})
      } else {
        next()
      }
    })
}

module.exports = {
  validateName
}