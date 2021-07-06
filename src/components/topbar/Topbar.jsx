import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons"

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={menuOpen ? "top-bar" : "top-bar active"}>
            <div className="top-wrapper">
                <div className="top-left">
                    <a href="#intro" className="logo">Portfolio.</a>
                    <div className="item-container">
                        <Person className="top-icon"/>
                        <span className="text-info">032 677 94 55</span>
                    </div>
                    <div className="item-container">
                        <Mail className="top-icon"/>
                        <span className="text-info">luannt201@gmail.com</span>
                    </div>
                </div>
                <div className="top-right">
                    <div className="navigation-icon" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar

