import React from 'react'

import { Avatar} from '@material-ui/core'
import './SidebarChat.css'
function SidebarChat() {
    return (
        <div className='sidebarChat'>
             <Avatar src={`https://avatars.dicebear.com/api/human/adfadf.svg`} />
             <div className='sidebarChat__info'>
                <h2>Felix</h2>
                <p>Name</p>

            </div>
        </div>
    )
}

export default SidebarChat;
