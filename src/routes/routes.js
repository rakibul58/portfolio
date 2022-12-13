import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../components/Blogs/Blogs';
import Contact from '../components/Contact/Contact';
import Home from '../components/Home/Home';
import Info from '../components/Info/Info';
import Projects from '../components/Projects/Projects';
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
                path: '/about',
                element: <Info></Info>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
        ]
    }
]);

export default router;