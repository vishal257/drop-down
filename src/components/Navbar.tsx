import menus from '../hooks/data';
import NavbarItems from './NavbarItems';

const Navbar = () => {
  
  return(
    <div className='bg-slate-600 w-1/5 py-8 h-dvh text-white font-black text-xl'>
      <NavbarItems menuItems={menus} depth={0}/>
    </div>
  )
}

export default Navbar
