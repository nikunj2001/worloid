const express = require('express')
const router = express.Router();
const {PostForm,storePost,posts,details, details1,updateForm,postUpdate,postValidations,deletePost,HomePosts} = require('../controllers/PostsController')
const {auth} = require('../middlewares/auth')

router.get("/createPost",auth,PostForm)
router.get("/AllPosts",auth,HomePosts)
router.post('/createPost',auth,storePost)
router.get('/posts/:page',auth,posts)
router.get('/details/:id',auth,details)
router.get('/details1/:id',auth,details1)
router.get('/update/:id',auth,updateForm);
router.post('/update',[postValidations,auth],postUpdate);
router.post('/delete',auth,deletePost)
module.exports = router;