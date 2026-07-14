export default function GalleryItem(props) {

    let stickerSource = props.src;
    let stickerSet = props.set;
    let stickerCharacters = props.characters;
    let stickerInformation = `Stickers from the "${stickerSet}" set. Featuring ${stickerCharacters}.`;

    return (

        <div className="gallery-item">

            <img 
                className="sticker"
                src={stickerSource}
                alt={stickerInformation}
                title={stickerCharacters}
                onClick={ (event) => {
                    props.setShowModal(true); 
                    props.getSelectedSticker(event.target.src);
                    props.getSelectedDescription(event.target.alt);
                }}
            />

            <a href={stickerSource} target="_blank" download="sticker.png">
                <img id="download-btn" src="./src/assets/misc/downloadbutton.png" alt="Download Button" />
            </a>

            

        </div>

    );

}