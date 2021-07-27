import "../styles/Nav.css";

export default function Nav() {
    return(
        <header className="header">
            <h3>
                <span className="header--span">Dev</span>challenges.io
            </h3>
            <nav className="navbar">
                <ul>
                    <li className="nav--item">
                        Typography                        
                    </li>
                    <li className="nav--item" >
                        Grid
                    </li>
                    <li className="nav--item">
                        Buttons
                    </li>
                    <li className="nav--item">
                        Inputs
                    </li>
                </ul>
            </nav>
        </header>
    )
};
