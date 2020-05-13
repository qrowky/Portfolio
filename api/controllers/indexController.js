module.exports={ 
    get:(req,res)=>{
        
        res.render('index',{
            contactToast: req.flash('mdpOublierC')
        })
    }
}