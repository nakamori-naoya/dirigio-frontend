import React, { useCallback, useState } from 'react'
import Paper from '@mui/material/Paper'
import { SelectChangeEvent } from '@mui/material/Select'
import TitleZone from './TitleZone'
import PrefectureSelectZone from './PrefectureSelectZone'
import { SelectedPrefecture } from 'datas/prefectures'
import BoxTextInput from './BoxTextInput'
import { Button } from '@mui/material'
import AlertDialogSlide from './Dialog'

type Props = {
  search: (obj: { addressInfo: string }) => void
  location: { lat: string; lng: string }
}

const InputAdressZone: React.FC<Props> = React.memo(({ search, location }) => {
  const [selectedPrefecture, setSelectedPrefecture] =
    useState<SelectedPrefecture>('未選択')
  const [municipalities, setMunicipalities] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [building, setBuilding] = useState<string>('')
  const addressInfo: string = `${selectedPrefecture} ${municipalities} ${address} ${building}`

  const inputMunicipalities = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setMunicipalities(event.target.value)
    },
    [setMunicipalities],
  )
  const inputAddress = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setAddress(event.target.value)
    },
    [setAddress],
  )

  const inputBuilding = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setBuilding(event.target.value)
    },
    [setBuilding],
  )

  const handleChange = useCallback(
    (event: SelectChangeEvent) => {
      setSelectedPrefecture(event.target.value as SelectedPrefecture)
    },
    [setSelectedPrefecture],
  )

  return (
    <Paper
      className="h-full"
      sx={{ borderRadius: 4, boxShadow: 6, minWidth: 440, minHeight: 560 }}
    >
      <div className="text-center w-4/5 mx-auto font-bold ">
        <h2 className="text-2xl pt-4 mb-2">店舗の住所をご記入ください</h2>
        <TitleZone isRequired={true} titleName="都道府県" />
        <PrefectureSelectZone
          selectedPrefecture={selectedPrefecture}
          handleChange={handleChange}
        />
        <TitleZone isRequired={false} titleName="市町村" />
        <BoxTextInput
          value={municipalities}
          placeholder="渋谷区道玄坂"
          fullWidth={true}
          required={false}
          onChange={inputMunicipalities}
          multiline={false}
        />
        <TitleZone isRequired={false} titleName="番地" />
        <BoxTextInput
          value={address}
          placeholder="1丁目16-6"
          fullWidth={true}
          required={false}
          onChange={inputAddress}
          multiline={false}
        />
        <TitleZone isRequired={false} titleName="ビル、階" />
        <BoxTextInput
          value={building}
          placeholder="タカノビル4階"
          fullWidth={true}
          required={false}
          onChange={inputBuilding}
          multiline={false}
        />
        {selectedPrefecture === '未選択' ? (
          <Button
            variant="contained"
            disabled
            sx={{
              width: '100%',
              fontSize: '1.125rem',
              lineHeight: '1.75rem',
              marginTop: '1rem',
              marginBottom: '1rem',
              paddingTop: '0.5rem',
              paddingBottom: '0.5rem',
              borderRadius: '0.375rem',
            }}
          >
            地図の位置を確認する
          </Button>
        ) : (
          <button
            onClick={() => search({ addressInfo })}
            className="w-full bg-green-400 text-white  text-lg  py-auto my-4 py-2 rounded-md"
          >
            地図の位置を確認する
          </button>
        )}

        <div className="flex justify-between">
          <button className="bg-gray-300 text-white  text-lg px-8 py-auto my-2 py-2 rounded-md">
            キャンセル
          </button>
          <AlertDialogSlide location={location} />
        </div>
      </div>
    </Paper>
  )
})

export default InputAdressZone
