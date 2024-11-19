import { FaCircleCheck } from "react-icons/fa6";
import { FaTriangleExclamation } from "react-icons/fa6";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import "./Banner.css"

export default function Banner({ children, status }) {
    const statusClass = status.toLowerCase()

    return (
        <div className={`banner ${statusClass}`}>
            {statusClass === 'success' ?
                <>
                    <FaCircleCheck className="banner-icon"/>
                    <div className="banner-info">
                        <h3 className="banner-title">Congratulations!</h3>
                        {children}
                    </div>
                </>
                : null
            }
            {statusClass === 'warning' ?
                <>
                    <FaTriangleExclamation className="banner-icon"/>
                    <div className="banner-info">
                        <h3 className="banner-title">Attention</h3>
                        {children}
                    </div>
                </>
                : null
            }
            {statusClass === 'error' ?
                <>
                    <FaCircleXmark className="banner-icon"/>
                    <div className="banner-info">
                        <h3 className="banner-title">There is a problem with your application</h3>
                        {children}
                    </div>
                </>
                : null
            }
            {statusClass === 'neutral' ?
                <>
                    <FaCircleInfo className="banner-icon"/>
                    <div className="banner-info">
                        <h3 className="banner-title">Update available</h3>
                        {children}
                    </div>
                </>
                : null
            }
        </div>
    )
}