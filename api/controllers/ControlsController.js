module.exports = {
	create : function(req,res,next){
	    Controls.create({mainStreet : req.param('m'), secondStreet : req.param('s')},function(err,created){
	        if(err) return res.badRequest();
	        return res.ok();
	    });
	},
	getAll : function(req,res,next){
	   Controls.find({},function(err,found){
	       return res.json(found);
	   });
	},
  search : function(req,res,next){
    Controls.find({ $or : [{mainStreet : req.param('s')},{secondStreet : req.param('s')}]},function(err,found){
      return res.json(found);
    });
  }
};
