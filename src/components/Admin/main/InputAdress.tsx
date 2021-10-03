import { useState } from 'react'
import Paper from '@mui/material/Paper'
import { SelectChangeEvent } from '@mui/material/Select'
import TitleZone from './TitleZone'
import PrefectureSelectZone from './PrefectureSelectZone'
import { SelectedPrefecture } from 'datas/prefectures'

const InputAdress = () => {
  const [selectedPrefecture, setSelectedPrefecture] =
    useState<SelectedPrefecture>('未選択')
  const [municipalities, setMunicipalities] = useState<string>('')

  const inputMunicipalities = (event: SelectChangeEvent) => {
    setMunicipalities(event.target.value as string)
  }

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedPrefecture(event.target.value as SelectedPrefecture)
    //メモ：型アサーションを使い、推論された型や、既に型定義済みの変数の型を上書きする
  }

  return (
    <Paper className="h-full" sx={{ borderRadius: 4, boxShadow: 6 }}>
      <div className="text-center w-4/5 mx-auto font-bold">
        <h2 className="text-2xl  pt-10 mb-2">店舗の住所をご記入ください</h2>
        <TitleZone isRequired={true} titleName="都道府県" />
        <PrefectureSelectZone
          selectedPrefecture={selectedPrefecture}
          handleChange={handleChange}
        />
        <TitleZone isRequired={false} titleName="市町村" />
      </div>
    </Paper>
  )
}

export default InputAdress
