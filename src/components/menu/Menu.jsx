import "./menu.scss"

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={menuOpen ? "menu" : "menu active"}>
            <ul>
                <li onClick={() => setMenuOpen(true)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={() => setMenuOpen(true)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={() => setMenuOpen(true)}>
                    <a href="#work">Work</a>
                </li>
                <li onClick={() => setMenuOpen(true)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={() => setMenuOpen(true)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
