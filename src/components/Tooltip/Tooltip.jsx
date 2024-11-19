import { HiOutlineInbox } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import './Tootip.css'

export default function Tooltip({ children, style = "bold", color, title }) {
    let styleClassname = style ? `${style}` : ""
    let colorClassname = color ? `${color}` : ""

    return (
        <div className={`tooltip ${styleClassname} ${colorClassname}`}>
            <HiOutlineInbox className="icon" />
            <div className="tooltip-content">
                <h3 className="tooltip-title">{title}</h3>
                <p className="tooltip-description">{children}</p>
            </div>
            <IoClose className="icon" />
        </div>
    )
}