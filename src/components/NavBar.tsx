import { NavLink } from "react-router-dom";

export default function Navbar() {

/*     const identityCard = {
        firstname: 'Yves',
        age: 17,
        isMale: false
    }

    const firstname = identityCard.firstname;
    const age = identityCard.age;
    const isMale = identityCard.isMale;

    const {firstname, age, isMale} = identityCard;

    const Navlink = {
        isActive:true,
        isOpen:false
    } */

    return (
        <>
            <nav className="flex justify-center gap-4 w-full absolute top-0 left-0 py-2">
                <NavLink
                    to="/"
                    className={ ( {isActive} ) => (isActive ? "text-red-700" : undefined) }>
                    Home
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? "text-red-700" : undefined)}>
                    Contact
                </NavLink>

                <NavLink
                    to="/message"
                    className={({ isActive }) => (isActive ? "text-red-700" : undefined)}>
                    Message
                </NavLink>

                <NavLink
                    to="/author"
                    className={ ( {isActive} ) => (isActive ? "text-red-700" : undefined) }>
                    Author
                </NavLink>
            </nav>
        </>
    )
}