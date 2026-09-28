import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
            <h1>
                RPG Guild
            </h1>
            <ul>
                <li className="text-sm lg:text-md">
                    <Link to="/">Home</Link>
                </li>
                <li className="text-sm lg:text-md">
                    <Link to="/guilds">Guildas</Link>
                </li >
                <li className="text-sm lg:text-md">
                    <Link to="/members">Members</Link>
                </li>
            </ul>
        </nav>
    )
}