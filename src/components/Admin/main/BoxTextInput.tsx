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
        className="bg-white font-serif"
        variant="outlined"
        value={value}
        placeholder={placeholder}
        fullWidth={fullWidth}
        InputLabelProps={{
          shrink: true,
        }}
        required={required}
        onChange={onChange}
        autoComplete="off"
        multiline={multiline}
      />
    )
  },
)

export default BoxTextInput
