
const Users =require('../models/User');
const Posts = require('../models/Posts');
const profile = async (req,res)=>{
    const id = req.id;
    const post=await Posts.find();
    const user =await Users.findOne({_id:id})
    const count = await Posts.find({userID:id}).countDocuments();
    console.log(count);
    res.render('profile',{title:'Profile',login:true,user,count})
}
const logout = (req,res)=>{
    req.session.destroy((err)=>{
        if(!err){
            res.redirect('/')
        }
    })
}
module.exports = {
    profile,logout
};