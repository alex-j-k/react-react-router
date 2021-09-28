import React from 'react'

const Explanation = () => {
    return ( 
        <div className="explanation">
            <h1>Here's how it's done...</h1>
            <ol>
                <li>COMMAND LINE - npm install-react-router</li>
                <li>APP - import from 'react-router-dom'</li>
                <p>import &#123;BrowserRouter as Router, Route, Switch&#125; from 'react-router-dom';</p>
                <li>APP - Surround app div with Router     </li>
                <p>&lt;Router&gt;  &lt;/Router&gt;</p>
                <li>APP - Decide where you want page content to go. <br/>
                     For example, in content div under navbar </li> 
                    <p> &lt;Switch&gt;  &lt;/Switch&gt;    </p>
                     <li>APP - Create route for each page </li>
                     <p> &lt;Route&gt;  &lt;/Route&gt;   </p>
                     <li>APP - Add path property to Route component</li>   
                     <p>&lt;Route path="/"&gt;</p> 
                     <p>&lt;Route path="/about"&gt;</p>    
                     <li>APP - Add on 'exact' property to components</li>
                     <p>&lt;Route exact path="/about"&gt;</p> 
                     <li>NAVBAR - in navbar, import link</li>
                     <p> import &#123; link &#125; from 'react-router-dom'; </p>
                     <li>NAVBAR - use 'Link' and 'to' instead of 'a' and 'href' <br/>
                            This stops requests to the server, and speeds up response time.
                     </li>
                     <p>  &lt;Link to="/about"&gt;About&lt;/Link&gt; </p>
                     <li>APP - Create a route parameter with changeable id at end of URL eg /:id</li>
                     <p> &lt;Blog path="/blog/:id"&gt; </p>
                        <li>NOT FOUND - add not found page at bottom of list</li>
                        <p>path='*'</p>

                     <li>BLOGPOST - import useParams </li>
                     <p>import &#123; useParams &#125; from 'react-router-dom';</p>
                     <p>    const &#123; id &#125; = useParams()</p>
                     <li>We can now access 'id' from inside Blog</li>
            </ol>
        </div>
     );
}
 
export default Explanation;