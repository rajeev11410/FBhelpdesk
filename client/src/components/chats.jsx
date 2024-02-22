import React from "react";

const Chats = ({ name, img, time, text, myChat }) => {
    return (
        <div className={`complete_chat ${myChat ? 'my_chat': ''}`}>
            <div className="chat">
                <div className="avatar">
                    <img src={img} alt="" />
                </div>
                <div class="text-box">
                    <p className="text">{text}</p>
                </div>
            </div>
            <p class="name_time">{name} - {time}</p>
        </div>
    );
}

export default Chats;