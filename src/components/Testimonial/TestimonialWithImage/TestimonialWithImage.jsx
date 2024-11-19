import { FaQuoteLeft } from "react-icons/fa6";
import './TestimonialWithImage.css'

export default function TestimonialWithImage({ src, children, name, profession }) {
    return (
        <div className="testimonial-with-image">
            <img src={`./src/assets/${src}.png`} alt={name} />
            <div className="testimonial">
                <FaQuoteLeft className="testimonial-icon" />
                <p className="testimonial-text">{children}</p>
                <div className="testimonial-content">
                    <span className="testimonial-name">{name}</span>
                    <span className="testimonial-profession">{profession}</span>
                </div>
            </div>
        </div>
    )
}