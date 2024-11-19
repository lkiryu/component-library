import { GrCloudUpload } from "react-icons/gr";
import "./Card.css"

export default function Card({children, icon = <GrCloudUpload/>, iconColor}){
    return(
        <div className="card">
            <div className={`icon ${iconColor}`}>{icon}</div>
            {children}
        </div>
    )
}