import React from 'react'
import TextField from '@mui/material/TextField'

type Props = {
  value: string
  placeholder: string
  fullWidth: boolean
  required: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  multiline: boolean
}
const BoxTextInput: React.FC<Props> = React.memo(
  ({ value, placeholder, fullWidth, required, onChange, multiline }) => {
    return (
      <TextField
        size="small"
        className="bg-white font-serif min-w-96"
        value={value}
        placeholder={placeholder}
        fullWidth={fullWidth}
        required={required}
        onChange={onChange}
        autoComplete="off"
        multiline={multiline}
      />
    )
  },
)

export default BoxTextInput
