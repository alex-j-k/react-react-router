import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Explanation from './Components/Explanation';
import About from './Components/About';
import Home from './Components/Home';
import Services from './Components/Services';
import Blogs from './Components/Blogs';
import NotFound from './Components/NotFound';
import BlogPost from './Components/BlogPost';

function App() {

  const blogs = [
    {name: 'blog-one', id: 1, content: 'this is post 1this is post 1this is post 1this is post 1this is  post 1this is post 1this is post 1this is post 1this is post 1this is post 1this is post 1this is post 1this is post 1this is post 1this is post 1this is post 1this is post 1this is post 1this is post 1this is post 1this is post 1'},
    {name: 'blog-two', id: 2, content:'this is post 2 this is post 2this is post 2this is post 2this is post 2this is post 2this is post 2this is post 2this is post 2this is post 2this is post 2this is post 2this is post 2this is post 2this is post 2this is post 2this is post 2this is post 2this is post 2this is post 2this is post 2'},
    {name: 'blog-three', id: 3, content: 'this is post 3this is post 3this is post 3this is post 3this is post 3this is post 3this is post 3this is post 3this is post 3this is post 3this is post 3this is post 3this is post 3this is post 3this is post 3this is post 3this is post 3this is post 3this is post 3this is post 3this is post 3'},
    ]

  return (
    <Router>
          <div className="App">
              <Navbar></Navbar>
              <div className='content'>
                  <Switch>
                      <Route exact path="/">
                          <Home></Home>
                      </Route>
                      <Route exact path="/about">
                          <About></About>
                      </Route>
                      <Route exact path="/explanation">
                          <Explanation></Explanation>
                      </Route>
                      <Route exact path="/services">
                          <Services></Services>
                      </Route>
                      <Route  path="/blog/:id">
                          <BlogPost blogs={blogs}></BlogPost>
                      </Route>
                      <Route exact path="/blogs/">
                          <Blogs blogs={blogs}></Blogs>
                      </Route>
                      <Route path='*'>
                        <NotFound></NotFound>
                      </Route>
                      
                  </Switch>
              </div>
          </div>
    </Router>
  );
}

export default App;
