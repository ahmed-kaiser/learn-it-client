import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../layout/Root';
import Blog from '../pages/Blog';
import CategoryBasedCourse from '../pages/CategoryBasedCourse';
import Courses from '../pages/Courses';
import Error from '../pages/Error';
import Faq from '../pages/Faq';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            errorElement: <Error />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/courses',
                    element: <Courses />,
                    loader: () => fetch('http://localhost:5001/courses')
                },
                {
                    path: '/category/:id/courses',
                    element: <CategoryBasedCourse />,
                    loader: ({ params }) => fetch(`http://localhost:5001/category/${params.id}/courses`)
                },
                {
                    path: '/blog',
                    element: <Blog />
                },
                {
                    path: '/faq',
                    element: <Faq />
                },
                {
                    path: '/sign-in',
                    element: <SignIn />
                },
                {
                    path: '/sign-up',
                    element: <SignUp />
                },
                {
                    path: '/profile',
                    element: <Profile />
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={router} />
    );
};

export default Routes;