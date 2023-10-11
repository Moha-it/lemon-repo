import {Link} from 'react-router-dom';
export default function Heading() {
    return(
        <header>
            <article>
                <section className="main_offer">
                     <h1>Little Lemon</h1>
                    <h2>Milano</h2>
                    <p className="subsection">We are a family owned Mediterranean restaurant, lon Via Piero della Francesca, 74, 20154 Milano MI, Italy, Illionis. We focus
                    on traditional recipes served with a modern twist.</p>
                    {/* <br></br>
                    <a href="http://www.google.com/book/" class="cta"> Book now </a> */}
                <Link className="action-button" data-testid="tbl-reserve"  to="/reservations">Reserve a table</Link>
                </section>
                
            </article>
        </header>
    );
}