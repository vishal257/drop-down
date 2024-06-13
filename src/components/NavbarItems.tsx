import Items from "./Items"

type DataItem = {
  label: string,
  to: string,
  children?: DataItem[];
}

type Dataset = {
  menuItems: DataItem[];
}

const NavbarItems:React.FC<Dataset> = ({menuItems}) => {

  return (
    <ul>
      {menuItems && menuItems.map((item, index) => (
        <Items key={index} menuItems={item}/>
      ))}
    </ul>
  )
}

export default NavbarItems
