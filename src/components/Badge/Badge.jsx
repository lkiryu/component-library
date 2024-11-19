import './Badge.css'

export default function Badge({color, shape}){
    const badgeColor = color.toLowerCase()
    const badgeShape = shape.toLowerCase()

    return(
        <p className={`badge ${badgeColor} ${badgeShape}`}>Badge</p>
    )
}