import NavbarItems from "./NavbarItems";

type MenuItems = {
  label: string,
  to: string,
  children?: MenuItems[],
}

type NavItemsProps = {
  menuItem: MenuItems;
}

const Items:React.FC<NavItemsProps> = ({menuItem}) => {
  return (
    <>
    <li>
      <p>{menuItem.label}</p>
      {menuItem.children && menuItem.children.length>0 && (
        <NavbarItems menu={menuItem.children}/>
      )}  
    </li>
    </>
  )
}

export default Items
