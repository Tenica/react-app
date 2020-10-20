import React from '.react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import About from '../components/About';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import IndexPage from '../components/IndexPage';
import Projects from '../components/Projects'
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import ProjectsSingle from '../components/ProjectsSingle';
import Services from '../components/Services';






const appRouter = () => {
    return <BrowserRouter>
        <div>
        <Header/>
        <Switch>
        <Route path="/" component={IndexPage} exact={true}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/About" component={About}/>
        <Route path="/Blog" component={Blog}/>
        <Route path="/Projects" component={Projects}/>
        <Route path="/ProjectsSingle" component={ProjectsSingle}/>
        <Route path="/Services" component={Services}/>
        <Route component={NotFoundPage}/>
        </Switch>
        </div>
        </BrowserRouter>
    
}

export default appRouter;
