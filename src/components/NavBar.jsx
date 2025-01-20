import Logo from "./Logo"
import LogoImag from "../assets/images/Webp.png"
const NavBar = ({ toggleTheme, theme }) => {
    return (
        <>
            <div className="navbar-app ">

                <div className="cover-loge">
                    <Logo image={LogoImag} text="game app header" className="logo-heder" />
                </div>
                <div className="cover-search">
                    <div>search</div>
                </div>
                <div className="theme-mode">
                    <label class="inline-flex items-center me-5 cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" onChange={toggleTheme} checked={theme === "dark"} />
                        <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
                        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {theme === "light" ? "light" : "Dark"}
                        </span>
                    </label>
                </div>
            </div>
        </>
    )
}

export default NavBar;