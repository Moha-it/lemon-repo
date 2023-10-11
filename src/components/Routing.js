import { Route ,Routes} from "react-router-dom";
import Homepage from "./site-pages/Homepage";
import Login from "./site-pages/Login";
import Order from "./site-pages/Order";
import About from "./site-pages/About";
import Booking from "./site-pages/Booking";
import Confirmation from "./site-pages/Confirmation";

export default function Routing(){
    return(
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/order" element={<Order />} />
            <Route path="/about" element={<About />} />
            <Route path="/reservations" element={<Booking />} />
            <Route path="/confirmation" element={<Confirmation />} />
            
        </Routes>
    );
}