import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import AddButton from "../../components/addoperateur"
const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
      
        <Navbar/>
        <AddButton />
        <Datatable/>
      </div>
    </div>
  )
}

export default List