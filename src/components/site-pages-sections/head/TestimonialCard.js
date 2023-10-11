import Star from '../../../assets/star.png';
export default function TestimonialCard(props)
{
    return(
         <article className='testimonials-cards'>
              <img src={Star} alt="Testimonails Icon" ></img>
              <h3>{props.name}</h3>
              <p>{props.description}</p>
         </article>
    );
}