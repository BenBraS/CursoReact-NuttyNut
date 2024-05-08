import ImagenLogo from "./ImgLogo/ImagenLogo";
import { Link } from "react-router-dom";

function NuttyNuts() {
  return (
    <div>
      
      <Link to="/"> 
        <ImagenLogo />
      </Link>
    </div>
  );
}

export default NuttyNuts;