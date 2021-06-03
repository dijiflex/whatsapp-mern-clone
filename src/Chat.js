import React from 'react'
import './Chat.css';
import {Avatar, IconButton } from "@material-ui/core";


import { AttachFile, SearchOutlined, MoreVert,  InsertEmoticon} from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/jkhkj.svg`} />
                <div className='chat__headerInfo'>
                    <h3>roomName</h3>
                    <p>24th May</p>
                </div>

                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className='chat__body'>
                <p className='chat_message chat_receiver'>
                        <span className='chat__name'>Felix</span>
                            How are you doing
                        <span className='chat__timestamp'>
                        {new Date().toUTCString()}
                        </span>   
                    </p>
                
                
            </div>

            <div className='chat__footer'>
                <InsertEmoticon />
                
                <form>
                    <input type='text' value=''  placeholder='Type a Message' />
                    <button  type='submit' >Send a Message</button>
                </form>

                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
