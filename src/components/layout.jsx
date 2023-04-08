import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import SideBar from "./sidebar"

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar/>
            <div className="pt-[60px] min-h-[calc(100vh-244px)] flex flex-row">
                <SideBar/>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout