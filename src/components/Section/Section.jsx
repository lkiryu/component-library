import "./Section.css"

export default function Section({title, children}){
    return(
        <section className="section">
            <h2 className="title">{title}</h2>
            {children}
        </section>
    )
}