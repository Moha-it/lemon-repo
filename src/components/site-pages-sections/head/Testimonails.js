import TestimonialCard from './TestimonialCard';
export default function Testimonails()
{
    return(
        <section>
            <article className='specials-topbar'>
                  <h1>Testimonials of Our Customers</h1>
            </article>
        

        <section className="specials-card-testimonails">
                <TestimonialCard name="Aram Adamth" description="This is the best Mediterranean food that I've ever had in my life!"/>
                <TestimonialCard name="Alan Teraso" description="Karsambaç ,  really loved this delicious desert."/>
                <TestimonialCard name="Suzy Lauran" description="I've had some great Mediterranean food before, but
             Little Lemon is the best!."/>
                <TestimonialCard name="Rony Bouslam" description="Great food,Thanks alot Little Lemon Team."/>
                <TestimonialCard name="Jimy Kelin" description="I love a good green salad – mixed greens, romaine, thnks alot"/>
                <TestimonialCard name="Brian Dean" description="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."/>
                <TestimonialCard name="Tyler Tohmine" description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago."/>
                 <TestimonialCard name="Swasan Deklimar" description="I Love Little Lemon very much"/>
                <TestimonialCard name="Jack Hu" description="This restaurant served as a perfect dinner for me after a 
                long night of studying. I would definitely order from here again!"/>
                <TestimonialCard name="Ehab Soulidar" description="Dessert is a perfectly light and refreshingly easy summer recipe! Thanks"/>
            </section>
        </section>
    );
}