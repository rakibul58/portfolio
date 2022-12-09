import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import Info from '../components/Info/Info';
import Skills from '../components/Skills/Skills';
import Main from '../layout/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/info',
                element: <Info></Info>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
        ]
    }
]);

export default router;