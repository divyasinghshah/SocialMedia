const Post=require('../models/post');
const User=require('../models/user');
module.exports.home =  async function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);
    // Post.find({},function(err,posts){
        
    //     return res.render('home',{
    //         title:' Codieal | Home',
    //         posts:posts
    //     });
    // });


    // Post.find({})
    // .populate('user')
    // .populate({
    //     path:'comments',
    //     populate:{
    //         path:'user'
    //     }
    // })
    // .exec(function(err,posts){
    //     User.find({},function(err,users){
    //         return res.render('home',{
    //             title:"COdieal | Home",
    //             posts:posts,
    //             all_user:users
    //         });
    //     })
       
    // });
    // using async await

    try{
                let posts= await Post.find({})
            .populate('user')
            .populate({
                path:'comments',
                populate:{
                    path:'user'
                }
            })

            let users=  await User.find({});

            return res.render('home',{
                title:"COdieal | Home",
                posts:posts,
                all_user:users
            });

    }
    catch(err){
        console.log("Error:",err);
        return;

    }
    

   
   
}

// module.exports.actionName = function(req, res){}