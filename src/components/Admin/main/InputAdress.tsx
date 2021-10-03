import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Paper from '@mui/material/Paper'
import { grey } from '@mui/material/colors'
import { prefectures } from '../../../datas/prefectures'

const InputAdress = () => {
  const [selectedPrefcture, setSelectedPrefcture] = React.useState<string>('')

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedPrefcture(event.target.value as string)
  }

  return (
    <Paper className="h-full" sx={{ borderRadius: 4, boxShadow: 6 }}>
      <div className="text-center w-4/5 mx-auto font-bold">
        <h2 className="text-2xl  pt-10 mb-2">店舗の住所をご記入ください</h2>
        <h2 className="text-left text-xl">都道府県</h2>
        <Select
          native
          className="w-full"
          onChange={handleChange}
          value={selectedPrefcture}
          sx={{
            borderRadius: 1,
            boxShadow: 2,
            color: selectedPrefcture === '未選択' ? grey[400] : grey[900],
            fontSize: 20,
            fontFamily: 'Monospace',
          }}
        >
          <option value={'未選択'} className="text-center">
            都道府県を選択
          </option>
          {prefectures.map((prefecture) => {
            return (
              <option value={prefecture} className="text-center">
                {prefecture}
              </option>
            )
          })}
        </Select>
      </div>
    </Paper>
  )
}

export default InputAdress
