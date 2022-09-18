import HomeIcon from '@mui/icons-material/Home';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import InventoryIcon from '@mui/icons-material/Inventory';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Menu = () => {
    return (
        <div className = "flex">
           
            <img src= "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>
            {/* <AccountCircleIcon className='account'/> */}
            <div className="center"><b>Nilvi Shah</b></div>
            <div className="none">
                <div> <HomeIcon className='try' /> <p className='abcd'>HOME</p></div>
                <div> <InsertDriveFileIcon className='try' /> <p className='abcd'>Deposits</p></div>
                <div> <InventoryIcon className='try' /> <p className='abcd'>Others</p></div>
                <div> <PaymentIcon className='try' /> <p className='abcd'>Payments</p></div>
                <div> <SettingsIcon className='try' /> <p className='abcd'>Settings</p></div>
                <label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
                
            </div>
           
            
        </div>
    )
}
export default Menu;