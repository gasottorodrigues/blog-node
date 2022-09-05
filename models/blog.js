const mongo = require('mongoose')

const Schema = mongo.Schema;

const blogSchema = new Schema({
   title:{
    type: String,
    require:true
   },
   snippet:{
    type: String,
    require:true
   },
   body:{
    type: String,
    require:true
   }
},{timestamps:true})

const Blog = mongo.model('Blog', blogSchema)

module.exports = Blog;