// blog_select_all, blog_select_once, blog_create_get, blog_create_post, blog_delete
const Blog = require('../models/blog');

function blog_select_all(req,res){
    Blog.find().sort({createdAt:-1}).then(blogs =>{
        res.render('blogs/index',{
            title:'All Blogs',
            blogs
        })
    })
    .catch(err=>{
        console.log(err);
    })
}

function blog_select_once(req,res){
    const id = req.params.id

    Blog.findById(id).then((results)=>{
        res.render('blogs/details',{title: results.title, blog:results})
    }).catch((err)=>{
        res.status(404).render('404',{title:'Blog Not Found'})
    })
}

function blog_create_get(req,res){
    res.render('blogs/new-blog',{
        title:'New Blog'
    })
}

function blog_create_post(req,res){
    var blog = new Blog(req.body)

    blog.save()
    .then(()=>{ 
        res.redirect('/blogs')
    })
    .catch((err)=>{
        console.log(err)
    })
}

function blog_delete(req,res){
    const id = req.params.id

    Blog.findByIdAndDelete(id).then((results)=>{ 
        res.json({
            redirect:'/blogs'
        });
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports = {
    blog_select_all,
    blog_select_once,
    blog_create_get,
    blog_create_post,
    blog_delete
}