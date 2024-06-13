import NavbarItems from "./NavbarItems"

type DataItem = {
  label: string,
  to: string,
  children?: DataItem[];
}

type Dataset = {
  menuItems: DataItem;
}

const Items:React.FC<Dataset> = ({menuItems}) => {
  return (
    <li>
      <p>{menuItems?.label}</p>
      {menuItems && menuItems.children && menuItems.children.length>0 && (
        <NavbarItems menuItems={menuItems.children}/>
      )}
    </li>
  )
}

export default Items
