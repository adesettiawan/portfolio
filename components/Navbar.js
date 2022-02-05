import Link from "next/link";
import { withRouter } from "next/router";
import { Fragment } from "react";

function Navbar({ router }) {
    const menus = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact", href: "/contact" },
    ];
    return (
        <nav className="navbar">
            <div className="container">
                <Link href="/">
                    <a className="logo">Mdln.</a>
                </Link>

                <ul className="nav-links">
                    {menus.map((menu, index) => {
                        return (
                            <Fragment key={index}>
                                <li>
                                    <Link href={menu.href}>
                                        <a
                                            className={`nav-item ${
                                                router.pathname == menu.href
                                                    ? "active"
                                                    : ""
                                            }`}
                                        >
                                            {menu.name}
                                        </a>
                                    </Link>
                                </li>
                            </Fragment>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);
