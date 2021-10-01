import { Divider } from '@mui/material'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

const containerStyle = {
  width: '400px',
  height: '400px',
}
const center = {
  lat: 35.69575,
  lng: 139.77521,
}
const Presenter = () => {
  return (
    <div className="w-4/6 mx-auto my-10 h-full pt-20">
      <span className="font-extrabold text-5xl pb-10">店舗住所</span>
      <div className="pb-4" />
      <Divider sx={{ border: 1 }} className=" text-gray-300 " />
      <div className="mb-4" />
      <span className="text-green-400">店舗情報</span>
      <span className="text-black">　＞　</span>
      <span className="text-gray-300">店舗住所の編集</span>
      <div className="mx-auto w-5/6 flex mt-10">
        <LoadScript googleMapsApiKey="AIzaSyCA9lIN7e29hVcLqNaa2GCZDlx4AzjA8mQ">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
          ></GoogleMap>
        </LoadScript>
        <div className=" h-screen" />
      </div>
    </div>
  )
}

export default Presenter
