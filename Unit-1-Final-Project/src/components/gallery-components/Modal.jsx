// import { useState } from "react";

export default function Modal(props) {
    

    return(

        <div className="screen-cover">
            
            <section id="modal">

                    <div id="modal-close-button">

                        <button id="close-btn" onClick={ () => props.setShowModal(false)}>CLOSE</button>

                    </div>

                    <div id="modal-body">

                        <img id="modal-image" src="" alt="Image missing!" title=""/>

                        <div id="modal-information">

                        </div>

                    </div>

                    <div id="modal-download">

                    </div>

            </section>

        </div>  

    );
    
    
}