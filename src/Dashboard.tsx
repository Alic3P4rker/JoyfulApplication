import { NavLink, Outlet } from 'react-router-dom';
import './nav-bar.css';
import { 
    BsFillHouseDoorFill, 
    BsSearch,
    BsCalendar3EventFill, 
    BsPlusCircle, 
    BsPersonCircle, 
    BsFillHeartFill, 
    BsChatLeftTextFill,
    BsFillGearFill,
    BsList
} from "react-icons/bs";

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="navBarBody">
                <b className='h5 site-color'>Project Tiergarten</b>
                
                <div className='navBar'>
                    <NavLink to="home" className='navBarItem'>
                        <BsFillHouseDoorFill className='navBarIcon'/>
                        <text className='navBarItemText'>Home</text>
                    </NavLink>

                    <div className='navBarItem'>
                        <BsSearch className='navBarIcon'/>
                        <text className='navBarItemText'>Search</text>
                    </div>

                    <NavLink to="events" className='navBarItem'>
                        <BsCalendar3EventFill className='navBarIcon'/>
                        <text className='navBarItemText'>Events</text>
                    </NavLink>

                    <NavLink to="create" className='navBarItem'>
                        <BsPlusCircle className='navBarIcon'/>
                        <text className='navBarItemText'>Create</text>
                    </NavLink>

                    <NavLink to="profile" className='navBarItem'>
                        <BsPersonCircle className='navBarIcon'/>
                        <text className='navBarItemText'>Profile</text>
                    </NavLink>

                    <NavLink to="posts" className='navBarItem'>
                        <BsFillHeartFill className='navBarIcon'/>
                        <text className='navBarItemText'>Posts</text>
                    </NavLink>

                    <NavLink to="messages" className='navBarItem'>
                        <BsChatLeftTextFill className='navBarIcon'/>
                        <text className='navBarItemText'>Messages</text>
                    </NavLink>

                </div>

                <div className='bottomNavBar'>
                    <div className='navBarItem'>
                        <BsList className='navBarIcon'/>
                        <text className='navBarItemText'>More</text>
                    </div>

                    <NavLink to="settings" className='navBarItem'>
                        <BsFillGearFill className='navBarIcon'/>
                        <text className='navBarItemText'>Settings</text>
                    </NavLink>
                </div>
            </div>

            <div className="dashboardContent">
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;