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
  const [marker, setMarker] = useState(null)
  const [location, setLocation] = useState(null)

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
  const search = ({ addressInfo }) => {
    console.log({ addressInfo })
    geocoder.geocode(
      {
        address: addressInfo,
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
          setLocation({
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng(),
          })
          console.log(location)
        }
      },
    )
  }

  return (
    <div className="w-4/6 mx-auto my-10 h-full pt-14">
      <span className="font-extrabold text-4xl pb-10">店舗住所</span>
      <div className="pb-4" />
      <Divider sx={{ border: 1 }} className=" text-gray-300 " />
      <div className="mb-4" />
      <span className="text-green-400">店舗情報</span>
      <span className="text-black">　＞　</span>
      <span className="text-gray-300">店舗住所の編集</span>
      <div className="mx-auto w-5/6 flex mt-6">
        <div
          style={{
            minHeight: '300px',
            maxHeight: '300px',
            minWidth: '300px',
            maxWidth: '300px',
            marginTop: '100px',
          }}
        >
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
        <div className="w-2/3 ml-20 -mb-20 -mr-10">
          <InputAdressZone search={search} location={location} />
        </div>
      </div>
    </div>
  )
}

export default Presenter
