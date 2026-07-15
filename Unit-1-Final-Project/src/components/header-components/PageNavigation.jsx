import { Link } from 'react-router'


export default function PageNavigation() {

    return(

        <nav id="page-navigation-div">
            
            <Link to="/">Home</Link> <br /><br />

            <Link to="/about">About</Link> <br /><br />

            <Link to="/stickers">Stickers</Link> <br /><br />

        </nav>

    );

}