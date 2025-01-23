import Social from "./social";

export default function TopBar() {
    return (
        <div className="bg-black text-white">
            <div className="mx-auto max-w-7xl p-2 lg:px-4">
                <div className="flex justify-between">
                    <p className="md:block hidden">Saturday, 21 December, 2024</p>
                    <select className="bg-black text-white border-none outline-none">
                        <option value="en">English</option>
                        <option value="pb">Punjabi</option>
                        <option value="hi">Hindi</option>
                    </select>
                    <Social />
                </div>
            </div>
        </div>
    );
}
  