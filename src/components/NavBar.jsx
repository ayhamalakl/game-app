import Logo from "./Logo"
import Theme from "./theme"
const NavBar = () => {
    return (
        <>
            <div className="navbar-app">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3">
                        <Logo text="game app header" className="logo-heder" />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div>search</div>
                        <Theme />
                    </div>

                </div>


            </div>
        </>
    )
}

export default NavBar