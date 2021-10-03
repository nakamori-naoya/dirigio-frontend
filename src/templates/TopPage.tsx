import NavBar from '../components/Admin/NavBar'
import SideBar from '../components/Admin/SideBar'
import Presenter from '../components/Admin/main/Presenter'

const TopPage = () => {
  return (
    <div className="relative">
      <div className="absolute w-screen z-10">
        <NavBar />
      </div>
      <div className="flex">
        <SideBar />
        <Presenter />
      </div>
    </div>
  )
}

export default TopPage
