export const errorHandler = (err,req,res,next) => {
  console.log(err)
  if(err.status===500){
    res.status(500).send("setsgg")
    return
  }
};

