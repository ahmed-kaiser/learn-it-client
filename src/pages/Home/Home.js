import AllCategories from "./AllCategories";
import Header from "./Header";
import Newsletter from "./Newsletter";
import PopularCourses from "./PopularCourses";

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
