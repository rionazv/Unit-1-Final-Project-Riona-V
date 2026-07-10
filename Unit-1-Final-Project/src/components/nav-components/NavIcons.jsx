import { valkData } from "../../mock-data/valkData";

export default function NavIcons() {
    
    return (

        <div id="nav-icons">
            
            {valkData.map( valk => (
            
                            <img 
                            className="chibi-icon"
                            key={valk.id} 
                            src={valk.url} 
                            alt={valk.characters}
                            title={valk.characters}
                            />
                            
                        ))}

        </div>

    );

}