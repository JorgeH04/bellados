

//it is middleware for showing the notification using noty
module.exports.setFlash=function(req,res,next){
    res.locals.flash={
        'success':req.flash('success'),
        'error':req.flash('error'),
        'carro':req.flash('carro')
    }

    next();
}


