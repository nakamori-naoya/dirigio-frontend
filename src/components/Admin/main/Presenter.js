import { Divider } from '@mui/material'
import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import InputAdressZone from './InputAdressZone'

//latitude/longitude  緯度／経度
const defaultLatLng = {
  lat: 35.7022589,
  lng: 139.7744733,
}

const Presenter = () => {
  const [map, setMap] = useState(null)
  const [maps, setMaps] = useState(null)
  const [geocoder, setGeocoder] = useState(null)
  const [address, setAddress] = useState(null)
  const [marker, setMarker] = useState(null)

  console.log({ maps })

  //Google Map API を利用するために、onGoogleApiLoaded を利用し、map, maps を取得
  const handleApiLoaded = (object) => {
    setMap(object.map)
    setMaps(object.maps)
    setGeocoder(new object.maps.Geocoder())
  }

  //onClickに従い、緯度経度を取得する
  const setLatLng = ({ x, y, lat, lng, event }) => {
    if (marker) {
      marker.setMap(null)
      //クリック時に マーカーが無限に増えていくのを防止
      //一旦マーカーを消す
    }
    const latLng = {
      lat,
      lng,
    }
    //マーカーを作る
    setMarker(
      new maps.Marker({
        map,
        position: latLng,
      }),
    )
    map.panTo(latLng) //map.panTo(latLng) は地図の中心を引数の緯度経度に移動させるために実行
  }
  const search = () => {
    geocoder.geocode(
      {
        address,
      },
      (results, status) => {
        if (status === maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location)
          if (marker) {
            marker.setMap(null)
          }
          setMarker(
            new maps.Marker({
              map,
              position: results[0].geometry.location,
            }),
          )
          console.log(results[0].geometry.location.lat())
          console.log(results[0].geometry.location.lng())
        }
      },
    )
  }

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
        <div style={{ height: '450px', width: '450px', marginTop: '100px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyBFc9vI8y7w-YZYR2IZ-2VHs8LnGlaKXiQ',
            }}
            defaultCenter={defaultLatLng}
            defaultZoom={16}
            onGoogleApiLoaded={handleApiLoaded}
            onClick={setLatLng}
          />
        </div>
        <div className="w-1/2 ml-20 -mb-20 -mr-10 border-2">
          <InputAdressZone />
        </div>

        {/* <div className="text-center">
            <input type="text" onChange={(e) => setAddress(e.target.value)} />
            <button type="button" onClick={search}>
              Search
            </button>
          </div> */}
      </div>
    </div>
  )
}

export default Presenter
