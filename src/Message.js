import React, {forwardRef} from 'react';
import {Card, CardContent, Typography} from "@material-ui/core";
import "./Message.css";

const Message = forwardRef(({username, message}, ref) => {
    const isUser = username === message.username;
    return(
        <div ref={ref} className={`message ${isUser && 'message__card'}`}>
            <div className="message__userName">
                {!isUser && `${message.username || "Unknown user"} `}
            </div>
            <Card className={isUser? "message__userCard" : "message__guestCard"}>
                <CardContent >
                    <Typography
                        variant="h5"
                        component="h5"
                        color="white"
                        className="message__userText"
                    >
                        {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
});

export default Message;