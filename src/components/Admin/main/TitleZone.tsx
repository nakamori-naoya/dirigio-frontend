import React from 'react'

type Props = {
  isRequired: boolean
  titleName: String
}
const TitleZone: React.FC<Props> = ({ isRequired, titleName }) => {
  return (
    <div className="flex mt-4 mb-3">
      <h2 className="text-left text-xl mr-2">{titleName}</h2>
      {isRequired ? (
        <h3 className="bg-pink-600 text-white px-2 py-1 text-sm rounded-md">
          必須
        </h3>
      ) : (
        <h3 className=" bg-blue-500 text-white px-2 py-1 text-sm rounded-md">
          任意
        </h3>
      )}
    </div>
  )
}

export default TitleZone
