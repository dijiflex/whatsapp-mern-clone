import React from 'react';
import SidebarChat from "./SidebarChat";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

import './Sidebar.css';
import { SearchOutlined } from '@material-ui/icons';
function Sidebar() { 
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src='https://avatars.githubusercontent.com/u/45859301?v=4' />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>


            </div>
            <div className='sidebar__search'>
                <div className="sidebar__searchContaianer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type='text' />
                </div>
            </div>
            <div className='sidebar__chats'>
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
