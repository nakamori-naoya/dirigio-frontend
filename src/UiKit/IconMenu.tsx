import React from 'react'
import HomeIcon from '@mui/icons-material/Home'

type Props = {
  icon: JSX.Element
  menuName: string
}

const IconMenu: React.FC<Props> = ({ icon, menuName }) => {
  return (
    <div className="hover:bg-green-50  hover:text-green-500 ">
      <button className="flex py-4">
        {icon}
        <div className="pl-10 text-xl text-left font-extrabold w-96 pt-1">
          {menuName}
        </div>
      </button>
    </div>
  )
}

export default IconMenu
