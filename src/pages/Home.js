import AllCategories from '../components/AllCategories';
import Header from '../components/Header';
import Newsletter from '../components/Newsletter';
import PopularCourses from '../components/PopularCourses';

const Home = () => {
    return (
        <>
         <Header />
         <AllCategories />
         <PopularCourses />
         <Newsletter />
        </>
    );
};

export default Home;