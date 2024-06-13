import menus from '../hooks/data';
import NavbarItems from './NavbarItems';

const Navbar = () => {
  return(
    <div>
      <NavbarItems menuItems={menus} />
    </div>
  )
}

export default Navbar
