import React from "react"
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarHeader, SubMenu} from "react-pro-sidebar"
import {BsBriefcase} from "react-icons/bs"
import {AiOutlineCalendar, AiOutlineShareAlt} from "react-icons/ai"
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
           <a 
             title={"We work"} 
             style={{cursor:"pointer"}}
            >
              {"We work"}
            </a>
         </div>
      </SidebarHeader>
      <SidebarContent>
         <Menu iconShape="circle">
           <SubMenu 
             title={"Công việc"}
             icon={<BsBriefcase/>}
           >
             <MenuItem>{"Bạn thực hiện"}</MenuItem>
             <MenuItem>{"Bạn quản trị"}</MenuItem>
             <MenuItem>{"Bạn Theo dõi/Phối hợp"}</MenuItem>
             <MenuItem>{"Tất cả"}</MenuItem>
           </SubMenu>
           <SubMenu
             title={"Dự án"}
             icon={<AiOutlineCalendar/>}
           >
              <MenuItem>Bạn thực hiện</MenuItem>
              <MenuItem>Bạn quản trị</MenuItem>
              <MenuItem>Bạn Theo dõi/Phối hợp</MenuItem>
              <MenuItem>Tất cả</MenuItem>
           </SubMenu>
           <SubMenu 
            title={"Công việc quy trình"} 
            icon={<AiOutlineShareAlt />}
            >
            <MenuItem>{"Bạn thực hiện"}</MenuItem>
            <MenuItem>{"Bạn quản trị"}</MenuItem>
            <MenuItem>{"Bạn Theo dõi/Phối hợp"}</MenuItem>
            <MenuItem>{"Tất cả"}</MenuItem>
          </SubMenu>
         </Menu>
      </SidebarContent>
   </ProSidebar>
  )
}

export default Aside