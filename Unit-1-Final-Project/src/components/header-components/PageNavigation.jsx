import { Link } from 'react-router'


export default function PageNavigation() {

    return(

        <nav id="page-navigation-div">

            <ul id="page-navigation-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/stickers">Stickers</Link></li>
            </ul>

        </nav>

    );

}