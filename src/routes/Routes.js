import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from '../layout/Root';
import Blog from '../pages/Blog';
import CategoryBasedCourse from '../pages/CategoryBasedCourse';
import CourseDetail from '../pages/CourseDetail/CourseDetail';
import Courses from '../pages/Courses';
import Error from '../pages/Error';
import Faq from '../pages/Faq';
import Home from '../pages/Home/Home';
import PaymentDetail from '../pages/PaymentDetail';
import AccountSetting from '../pages/Profile/AccountSetting';
import ChangePassword from '../pages/Profile/ChangePassword';
import Profile from '../pages/Profile/Profile';
import PublicProfile from '../pages/Profile/PublicProfile';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AuthRequired from '../protected-layer/AuthRequired';

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
                    element: <Profile />,
                    children: [
                        {
                            path: '/profile',
                            element: <PublicProfile />
                        },
                        {
                            path: '/profile/account-setting',
                            element: <AccountSetting />
                        },
                        {
                            path: '/profile/change-password',
                            element: <ChangePassword />
                        }
                    ]
                },
                {
                    path: '/course/:id',
                    element: <CourseDetail />,
                    loader: ({ params }) => fetch(`http://localhost:5001/course/${params.id}`)
                },
                {
                    path: '/course/:id/payment-detail',
                    element: <AuthRequired><PaymentDetail /></AuthRequired>,
                    loader: ({ params }) => fetch(`http://localhost:5001/course/${params.id}`)
                }
            ]
        }
    ]);
    return (
        <RouterProvider router={router} />
    );
};

export default Routes;