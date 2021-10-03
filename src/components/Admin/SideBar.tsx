import Paper from '@mui/material/Paper'
import HomeIcon from '@mui/icons-material/Home'
import IconMenu from '../../UiKit/IconMenu'
import StoreIcon from '@mui/icons-material/Store'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import StarIcon from '@mui/icons-material/Star'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import SellIcon from '@mui/icons-material/Sell'
import LogoutIcon from '@mui/icons-material/Logout'
import HelpIcon from '@mui/icons-material/Help'

export default function SideBar() {
  return (
    <Paper className="w-1/5  border-r-2  h-screen pt-20 relative ">
      <IconMenu
        icon={<HomeIcon fontSize="large" className="ml-6 " />}
        menuName="ホーム"
      />
      <IconMenu
        icon={<StoreIcon fontSize="large" className="ml-6" />}
        menuName="店舗情報"
      />
      <IconMenu
        icon={<RestaurantMenuIcon fontSize="large" className="ml-6" />}
        menuName="メニュー"
      />
      <IconMenu
        icon={<MonetizationOnIcon fontSize="large" className="ml-6" />}
        menuName="売上管理"
      />
      <IconMenu
        icon={<StarIcon fontSize="large" className="ml-6" />}
        menuName="レビュー"
      />
      <IconMenu
        icon={<CalendarViewDayIcon fontSize="large" className="ml-6" />}
        menuName="口座情報"
      />
      <IconMenu
        icon={<SellIcon fontSize="large" className="ml-6" />}
        menuName="プラン管理"
      />
      <div className=" w-full bottom-0 absolute ">
        <IconMenu
          icon={<HelpIcon fontSize="large" className="ml-6" />}
          menuName="お問い合わせ"
        />
        <IconMenu
          icon={<LogoutIcon fontSize="large" className="ml-6" />}
          menuName="ログアウト"
        />
      </div>
    </Paper>
  )
}
