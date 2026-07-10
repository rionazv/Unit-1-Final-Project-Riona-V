import { useEffect, useState } from "react";

export default function NavDropdown() {

    const [galleryState, setGalleryState] = useState("All");
    
    function handleChange(event) {

        const newGalleryState = event.target.value;
        setGalleryState(newGalleryState);

    }

    useEffect(() => {
        console.log(galleryState);
    }, [galleryState]);

    return (

        <div id="nav-dropdown">
            
            <select name="sticker-set" id="sticker-set" onChange={handleChange}>

                <option value="All">All</option>
                <option value="From Finality, the Origin">From Finality, the Origin</option>
                <option value="Soaring Good Fortune">Soaring Good Fortune</option>
                <option value="Dance of Life and Death">Dance of Life and Death</option>

            </select>

        </div>

    );
}

