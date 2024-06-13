import { ArrowDown } from "lucide-react"
import NavbarItems from "./NavbarItems";
import menus from "../hooks/data"


const Navbar = () => {
  return (
    <div className="bg-gray-700 p-5">
      <NavbarItems menu={menus}/>
    </div>
  )
}

export default Navbar
