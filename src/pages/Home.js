import AllCategories from '../components/AllCategories';
import Header from '../components/Header';
import PopularCourses from '../components/PopularCourses';

const Home = () => {
    return (
        <>
         <Header />
         <AllCategories />
         <PopularCourses />
        </>
    );
};

export default Home;