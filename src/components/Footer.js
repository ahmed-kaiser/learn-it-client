
const Footer = () => {
    return (
        <footer className="py-10 px-2 md:px-6 bg-slate-800 text-slate-300">
            <div className="md:container mx-auto lg:max-w-7xl flex justify-between">
                <p>@2022 Learnit. All Right Reserved.</p>
                <ul className="flex gap-5">
                    <li className="hover:underline">Help</li>
                    <li className="hover:underline">Terms Condition</li>
                    <li className="hover:underline">Security</li>
                    <li className="hover:underline">Privacy Policy</li>
                    <li className="hover:underline">Return Policy</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;