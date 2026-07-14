// import { useState } from "react";

export default function Modal(props) {
    

    return(

        <div className="screen-cover" onClick={ () => props.setShowModal(false)}>
            
            <section id="modal">

                    <div id="modal-close-div">

                        <button id="close-btn" onClick={ () => props.setShowModal(false)}>CLOSE</button>

                    </div>

                    {/* MODAL DATA */}
                    <div id="modal-body-div">

                        <img id="modal-image" src={props.src} alt={props.alt} />

                        <div id="modal-information">

                            <p>{props.alt}</p>

                        </div>

                    </div>

                    <div id="modal-download-div">

                        <button><a href={props.src} target="_blank" download="sticker.png">Download</a></button>

                    </div>

            </section>

        </div>  

    );
    
    
}