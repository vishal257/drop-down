import Items from "./Items";

type MenuItems = {
    label: string,
    to: string,
    children?: MenuItems[],
}

type NavItemsProp = {
  menu: MenuItems[];
}

const NavbarItems:React.FC<NavItemsProp> = ({menu}) => {
  return (
    <>
    <ul className="fx text-white justify-end gap-20 pr-20"> 
      {menu && menu.length && menu.map((item, index) => (
        <Items menuItem={item} key={index}/>
      ))}
    </ul>
    </>
  )
}

export default NavbarItems
