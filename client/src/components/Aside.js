import React from "react"
import {
  Menu, 
  MenuItem, 
  ProSidebar, 
  SidebarContent,
  SidebarHeader, 
  SubMenu
} from "react-pro-sidebar"
import {BsNewspaper} from "react-icons/bs"
import {AiOutlineUserSwitch} from "react-icons/ai"
const Aside = ({image, collapsed, rtl, toggled, handleToggleSidebar}) => {
  return (
    <ProSidebar 
      image={image ? false : ""}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
   >
      <SidebarHeader>
         <div 
           style={{
            padding:"24px",
            textTransform:"uppercase",
            fontWeight:"bold",
            fontSize:14,
            letterSpacing:"1px",
            overflow:"hidden",
            textOverflow:"ellipsis",
            whiteSpace:"nowrap"
          }}
         >
           <a title={"Fetch api"} style={{cursor:"pointer"}}>{"Fetch api"}</a>
         </div>
      </SidebarHeader>
      <SidebarContent>
         <Menu iconShape="circle">
           <SubMenu 
             title={"Post"}
             icon={<BsNewspaper/>}
           >
             <MenuItem>Get post by id list</MenuItem>
             <MenuItem>Get post by id form</MenuItem>
           </SubMenu>
           <SubMenu
             title="User"
             icon={<AiOutlineUserSwitch/>}
           >
              <MenuItem>Get user by id list</MenuItem>
              <MenuItem>Get user by id form</MenuItem>
           </SubMenu>
         </Menu>
      </SidebarContent>
    </ProSidebar>
  )
}

export default Aside