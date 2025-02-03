
import { CiShoppingCart } from "react-icons/ci";

const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <h4>
            foo<b>dy</b>
          </h4>
        </div>
        <div className="nav">
          <h4>Home</h4>
          <h4>Menu</h4>
          <h4>AboutUs</h4>
          <h4>Contact</h4>
          
          <h4>Blog</h4>
          
          
        </div>
        <div>
          <div className="rightnav">
            <div className="cart">
              <CiShoppingCart />
            </div>
  
            <div>
              <button class="button-81" role="button">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }; 
  export default Header;