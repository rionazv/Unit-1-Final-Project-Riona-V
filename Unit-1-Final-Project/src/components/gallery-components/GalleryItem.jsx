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
                onClick={handleStickerClick}
            />
        </div>

    );

}

function handleStickerClick(event) {
    console.log(event.target.alt);
}