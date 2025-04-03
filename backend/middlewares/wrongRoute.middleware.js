const wrongRoute = (req,res,next) =>{
    res.status(404).json({msg:'wrong route! please cross check'})
}

export {wrongRoute}