import React from 'react';
import Bloglist from './Bloglist';

const Blogs = (props) => {


   

    return ( 
        <div className='blog'>
            <h1>This is the blogs homepage </h1>
    <h2>Below is a list of posts.</h2>
            <h2>All have different route parameters</h2>
            <h2>eg /blog/topic1  eg /blog/topic2</h2>


           <Bloglist blogs={props.blogs}></Bloglist>
        </div>
     );
}
 
export default Blogs;