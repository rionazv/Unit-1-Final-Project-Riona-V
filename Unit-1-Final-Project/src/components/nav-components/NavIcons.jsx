import { valkData } from "../../mock-data/valkData";
import IndividualValkIcon from "./IndividualValkIcon";

export default function NavIcons() {


    return (

        <div id="nav-icons">
            
            {valkData.map( valk => (
            
                            <IndividualValkIcon
                            key={valk.id} 
                            src={valk.url} 
                            alt={valk.characters}
                            title={valk.characters}
                            />
                            
            ))}

        </div>

    );

}

