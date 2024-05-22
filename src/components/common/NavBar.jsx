import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='shop'>Shop</Link>
          </li>
        </ul>
        <div>
          <img src="" alt="" />
          <div>3</div>
        </div>
      </div>
    </div>
  );
};