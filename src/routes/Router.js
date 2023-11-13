import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../views/users/Login';
import NewUser from '../views/users/New';
import Index from '../views/home/Index';
import ProfileIndex from '../views/users/profile/Index';
import MessagesIndex from '../messages/Index';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<Login />} />
                <Route path="/users/new" exact element={<NewUser />} />
                <Route path="/index" exact element={<Index />} />
                <Route path="/profile" exact element={<ProfileIndex />} />
                <Route path="/messages" exact element={<MessagesIndex />} />

            </Routes>
        </Router>
    );
};

export default AppRouter;
