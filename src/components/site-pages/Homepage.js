import Headings from "../site-pages-sections/head/Heading"
import Specials from "../site-pages-sections/head/Specials";

import About from "../site-pages-sections/head/About";
import Testimonails from "../site-pages-sections/head/Testimonails";

export default function Homepage() {
    return (

      <>
         <Headings  />
          <main>
              <Specials  />
          
              <Testimonails  /> 
              <About  /> 
          </main>  
        
      </>
    );
}