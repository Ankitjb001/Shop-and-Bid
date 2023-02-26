import { AppBar, Toolbar,styled } from "@mui/material"
import { NavLink } from "react-router-dom";


const Header=styled(AppBar)`
background:#111111
`;
const Tab=styled(NavLink)`
font-size:20px;
margin-right:20px;
color:#fff;
text-decoration:none;


`;
const Nav=()=>{
    return (
        <Header position="static">
            <Toolbar>
                <Tab to='/add'>
                    Adduser
                </Tab>
               
                <Tab to='/view'>
                    Viewuser
                </Tab>

            </Toolbar>
        </Header>
    )
}

export default Nav;