import Home from './components/home';
import NotFoundPage from './components/NotFoundPage.jsx';
import Users from './components/users';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavbarComp/Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={Users} />
                <Route path="**" component={NotFoundPage} />
            </Switch>
        </BrowserRouter >
    )
}

export default App;