import React from 'react';
import {useParams } from 'react-router-dom';


const BlogPost = (props) => {

    const { id } = useParams();


    console.log(id)

    // setTimeout( () => {
    //const currentBlog = props.blogs.forEach((blog) => {if (blog.id == id) {console.log(blog)} });
   // setCorrectBlog(currentBlog) //}, 5000);
    //console.log(currentBlog)

    return (  
        <div className="blogpost">
            <h1> Blog Topic {id}</h1>
      
                {props.blogs.map((blog) => {if (blog.id == id) { 
                    return  <div><h1>{blog.name}</h1><p>{blog.content}</p></div>  
            } 
        })
    }

        </div>
    );
}
 
export default BlogPost;