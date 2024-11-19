import logo from '../../../assets/testimonial-logo.png'
import './TestimonialWithoutImage.css'

export default function TestimonialWithoutImage({ children, name, profession }) {
    return (
        <div className="testimonial-without-image">
            <img src={logo} alt="logo" />
            <p>"{children}"</p>
            <div className="testimonial-name-profession">
                <span className="testimonial-name">{name}</span>
                /
                <span className="testimonial-profession">{profession}</span>
            </div>
        </div>
    )
}