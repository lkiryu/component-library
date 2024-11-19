import TestimonialWithImage from "./TestimonialWithImage/TestimonialWithImage";
import TestimonialWithoutImage from "./TestimonialWithoutImage/TestimonialWithoutImage";

export default function Testimonial({children, src, name, profession}){
    if (src) {
        return(
            <TestimonialWithImage src={src} name={name} profession={profession}>
                {children}
            </TestimonialWithImage>
        )
    } else {
        return(
            <TestimonialWithoutImage name={name} profession={profession}>
                {children}
            </TestimonialWithoutImage>
        )
    }
}