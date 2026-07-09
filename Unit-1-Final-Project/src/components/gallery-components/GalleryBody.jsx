import { stickerData } from "../../mock-data/stickerData.js";
import GalleryItem from "./GalleryItem.jsx";

export default function GalleryBody() {
    
    return (
        

        <main id="gallery-section">
            
            {stickerData.map( sticker => (

                <GalleryItem 
                key={sticker.id} 
                src={sticker.url} 
                alt={sticker.characters}
                />
                
            ))}

        </main>

    );

}