import React from 'react';
import { Link } from 'react-router-dom';


const Bloglist = (props) => {
    return ( 
        <div className="bloglist">
            {props.blogs.map((blog)=> {
             return(
                 <Link to={`/blog/${blog.id}`} key={blog.id}>
                   <div className={blog.name} >
                            <h1>{blog.name} - topic {blog.id}</h1>
                    </div>
                 </Link>)
})}
        </div>
     );
}
 
export default Bloglist;


