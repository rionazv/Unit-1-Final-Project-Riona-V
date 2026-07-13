// import { useState } from "react";

export default function GalleryItem(props) {

    let stickerSource = props.src;
    let stickerSet = props.set;
    let stickerCharacters = props.characters;
    let stickerInformation = `
    Set: ${stickerSet}
    Featured characters: ${stickerCharacters}
    `;

    return (

        <div className="gallery-item">

            <img 
                className="sticker"
                src={stickerSource}
                alt={stickerInformation}
                title={stickerCharacters}
                onClick={ () => props.setShowModal(true)}
            />

            <a href={stickerSource} target="_blank" download="sticker.png">
                <img id="download-btn" src="./src/assets/misc/downloadbutton.png" alt="Download Button" />
            </a>

        </div>

    );

}