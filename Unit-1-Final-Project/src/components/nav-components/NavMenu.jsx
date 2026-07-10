import NavDropdown from "./NavDropdown.jsx";
import NavIcons from "./NavIcons.jsx";

export default function NavMenu({galleryState, setGalleryState}) {
    
    return (

        <nav id="nav-section">
            
            {/* PASS DOWN DROPDOWN SELECTION AND FUNCTION TO UPDATE IT AS PROPS */}
            <NavDropdown galleryState={galleryState} setGalleryState={setGalleryState}/>
            
            <NavIcons/>

        </nav>

    );

}