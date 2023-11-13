import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../views/users/Login';
import NewUser from '../views/users/New';
import Index from '../views/home/Index';
import ProfileIndex from '../views/users/profile/Index';
import MessagesIndex from '../messages/Index';
import ContractIndex from '../views/contract/Index';
import ContractShow from '../views/contract/Show';
import SearchIndex from '../views/search/Index';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/users/new" exact element={<NewUser />} />
                <Route path="/index" exact element={<Index />} />
                <Route path="/profile" exact element={<ProfileIndex />} />
                <Route path="/messages" exact element={<MessagesIndex />} />
                <Route path="/contracts" exact element={<ContractIndex />} />
                <Route path="/contracts/show/" exact element={<ContractShow />}/>
                <Route path="/search" exact element={<SearchIndex />}/>

            </Routes>
        </Router>
    );
};

export default AppRouter;
