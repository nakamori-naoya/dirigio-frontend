import React from 'react'
import { Select } from '@mui/material'
import { grey } from '@mui/material/colors'
import { prefectures, SelectedPrefecture } from '../../../datas/prefectures'
import { SelectChangeEvent } from '@mui/material/Select'

type Props = {
  selectedPrefecture: SelectedPrefecture
  handleChange: { (event: SelectChangeEvent): void }
}
const PrefectureSelectZone: React.FC<Props> = React.memo(
  ({ handleChange, selectedPrefecture }) => {
    return (
      <Select
        size="small"
        native
        className="w-full"
        onChange={handleChange}
        value={selectedPrefecture}
        sx={{
          borderRadius: 1,
          boxShadow: 2,
          color: selectedPrefecture === '未選択' ? grey[400] : grey[900],
          fontSize: 18,
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
    )
  },
)

export default PrefectureSelectZone
