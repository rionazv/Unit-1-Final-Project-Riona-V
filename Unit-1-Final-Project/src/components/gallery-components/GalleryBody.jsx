import { stickerData } from "../../mock-data/stickerData.js";
import GalleryItem from "./GalleryItem.jsx";
import NoResultsNotif from "./NoResultsNotif.jsx";

export default function GalleryBody({galleryState}) {

    // CREATE AN ARRAY THAT WILL UPDATE EVERY RE-RENDER WITH THE CORRECT STICKERS
    let stickersToRender = [];

    // INITIALLY FILL THE ARRAY WITH AEVERYTHING
    if (galleryState === "All") {

        stickersToRender = stickerData;

    } else {

        // WHEN STATE CHANGES, RE-FILL ARRAY
        for(let sticker of stickerData) {

            if(sticker.set === galleryState) {
                stickersToRender.push(sticker);
            }

        }

    }

    if(stickersToRender.length === 0) {
        return <NoResultsNotif/>
    }
    
    // RENDER THE ARRAY
    return (

        <main id="gallery-section">
            
            {stickersToRender.map( sticker => (

                <GalleryItem 
                key={sticker.id} 
                src={sticker.url} 
                set = {sticker.set}
                characters={sticker.characters}
                />
                
            ))}

        </main>

    );

}