import Cards from './Cards';
import GreekSalad from '../../../assets/greek-salad.jpg';
import Bruschetta from '../../../assets/bruschetta.jpg';
import Karsambaç from '../../../assets/Karsambaç.jpg';

export default function Specials(){
    return(
          
           <section>
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../../../assets/LittleLemonMenu.jpg')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>
            <section className="specials-card">
                 <Cards image={GreekSalad} name="Greek Salad" price="$15.99" description ="I love a good green salad – mixed greens, romaine, and kale are some of my favorite starting points for fresh, healthy meals. But summer is a time when all vegetables are at their peak. Sweet, juicy tomatoes, snappy bell peppers, and crisp cucumbers abound. This Greek salad recipe showcases these veggies, without any greens to get in the way. "  />
                 <Cards image={Bruschetta}name="Bruschetta" price="$17.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."/>
                <Cards image={Karsambaç} name="Karsambaç Dessert" price="$9.50" description="Karsambaç is a traditional Turkish dessert originating from the highlands of Mersin, most noteably the town of Çamlıyayla. This unique dessert is made with a combination of clean mountain snow and a sweet syrup such as honey, sugar syrup, or molasses."/>
            </section>
            
            
         </section>
        
    );
}