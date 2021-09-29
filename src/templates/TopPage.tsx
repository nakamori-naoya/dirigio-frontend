import Presenter from 'components/Admin/main/Presenter'
import NavBar from '../components/Admin/NavBar'
import SideBar from '../components/Admin/SideBar'

const TopPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <SideBar />
        <Presenter />
      </div>
    </>
  )
}

export default TopPage
