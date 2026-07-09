export default function GalleryItem(props) {

    return (

        <div className="gallery-item">
            <img 
                className="sticker"
                src={props.src}
                alt={props.characters}
                title={props.characters}
            />
        </div>

    );

}