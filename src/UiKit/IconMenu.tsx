import React from 'react'

type Props = {
  icon: JSX.Element
  menuName: string
}

const IconMenu: React.FC<Props> = ({ icon, menuName }) => {
  return (
    <div className="hover:bg-green-50  hover:text-green-600 ">
      <button className="flex py-2 w-full ">
        {icon}
        <div className="pl-10 text-xl text-left font-extrabold pt-1 ">
          {menuName}
        </div>
      </button>
    </div>
  )
}

export default IconMenu
