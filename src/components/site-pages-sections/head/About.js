export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon</h1>
                <h2>Milano</h2>
                <p className="about-subtext">Little Lemon opened in 1995 by  Italian family 
                Despite the city's diversity, the family  works in preparing the most delicious dishes of Mediterranean Food, 
                and were inspired to bring the flavors of their hometown. The family 
                continue to oversee the Little Lemon restaurant, nearly thirty years later.</p>
            </section>
            <section className="double-image">
                <img className="about-1" src={require('../../../assets/food3.webp')} alt="Little Lemon restaurant cuisine 1"></img>
                
            </section>
    </article>
    );
}