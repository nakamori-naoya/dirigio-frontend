import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'

type Props = {
  location: { lat: string; lng: string }
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const AlertDialogSlide: React.FC<Props> = React.memo(({ location }) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const alertLocation = () => {
    alert(`緯度：${location.lat}  経度：${location.lng}`)
  }
  return (
    <div>
      <button
        onClick={handleClickOpen}
        className="bg-green-400 text-white  text-lg px-8 py-auto my-2 py-2 rounded-md"
      >
        更新する
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            記載した内容で店舗住所を更新しますか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button
            onClick={() => {
              handleClose()
              alertLocation()
            }}
          >
            はい
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
})

export default AlertDialogSlide
