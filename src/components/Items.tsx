import { useState } from "react";
import NavbarItems from "./NavbarItems"

type DataItem = {
  label: string,
  to: string,
  children?: DataItem[];
}

type Dataset = {
  menuItems: DataItem;
}

type DisplayItemState = {
  [key:string]: boolean,
}

const Items:React.FC<Dataset> = ({menuItems}) => {

  const [displayItem, setDisplayItem] = useState<DisplayItemState>({});

  const handleToggle = (currentLabel: string) => {
    setDisplayItem({
      ...displayItem,
      [currentLabel] : !displayItem[currentLabel],
  })
  }

  return (
    <li>
      <div className="flex items-center">
        <p>{menuItems?.label}</p>
        {
          menuItems && menuItems.children && menuItems.children.length>0 ? (
            <span onClick={() => handleToggle(menuItems.label)} className="flex items-center cursor-pointer">+</span>
          ) : null
        }
      </div>
      {menuItems && menuItems.children && menuItems.children.length>0 && displayItem[menuItems.label] && (
        <NavbarItems menuItems={menuItems.children}/>
      )}
    </li>
  )
}

export default Items
