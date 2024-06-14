import { useState } from "react";
import NavbarItems from "./NavbarItems"
import { Link } from "react-router-dom";

type DataItem = {
  label: string,
  to: string,
  children?: DataItem[];
}

type Dataset = {
  menuItems: DataItem,
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
    <>
    <li className="">
      <div className="flex items-center b-red-500">
        <p>
          {(!!menuItems?.children) ? (<span>{menuItems?.label}</span>) : (<Link to={menuItems.to}>{menuItems?.label}</Link>)}
        </p>
        {
          menuItems && menuItems.children && menuItems.children.length>0 ? (
            <span onClick={() => handleToggle(menuItems.label)} className="flex items-center cursor-pointer">
              {displayItem[menuItems.label] ? '  -' : ' +'}
            </span>
          ) : null
        }
      </div>
      {(menuItems && menuItems.children && menuItems.children.length>0 && displayItem[menuItems.label]) && (
          <NavbarItems menuItems={menuItems.children} depth={1}/>
      )}
    </li>
    </>
  )
}

export default Items
