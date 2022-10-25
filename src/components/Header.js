import header_image from '../assets/images/header-image3.png';
const Header = () => {
    return (
        <section>
            <div className="md:container mx-auto lg:max-w-7xl px-3 md:px-6 py-10 grid grid-col-1 sm:grid-cols-2 items-center gap-6 relative -z-20">
                <div className="text-center sm:text-start">
                    <small className="text-blue-700 font-bold text-lg">Start learning</small>
                    <h1 className="font-bold text-3xl leading-[40px] lg:text-5xl lg:leading-[60px] font-serif text-slate-800">Build Data Skills <br/> <span className="text-blue-700" >Online</span></h1>
                    <p className="max-w-sm mx-auto sm:mx-0 py-2 text-slate-700">Data driven everything. Get the skills you need for the future of work.</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-sm font-semibold mt-2">Explore All Courses</button>
                </div>
                <div>
                    <img src={header_image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Header;