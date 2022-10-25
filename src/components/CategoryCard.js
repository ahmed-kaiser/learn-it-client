
const CategoryCard = ({ category }) => {
    return (
        <div className="w-[140px] sm:w-[160px] max-w-[200px] border text-center p-2 cursor-pointer rounded-md shadow hover:shadow-md bg-slate-300">
            <img src={category.image} alt="" className="w-[50px] h-[50px] mx-auto" />
            <h4 className="font-semibold mt-2">{category.name}</h4>
            <p>{category.total_course} {category.total_course > 1? "Corses" : "Course" }</p>
        </div>
    );
};

export default CategoryCard;