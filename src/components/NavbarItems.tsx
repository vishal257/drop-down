import Items from "./Items"

type DataItem = {
  label: string,
  to: string,
  children?: DataItem[];
}

type Dataset = {
  menuItems: DataItem[],
  depth: number,
}

const NavbarItems:React.FC<Dataset> = ({menuItems, depth}) => {

  return (
      <ul className="mx-10">
        {menuItems && menuItems.map((item,index) => (
          <div key={index}>
            <Items menuItems={item}/>
            {depth === 0 ? <hr className="mb-8 mt-2"/> : null}
          </div>
 
        ))}
      </ul>
  )
}

export default NavbarItems
