import React from "react";

const Message = ({ children }) => {
  return <span style={{
            display: 'block',
            textAlign: 'center',
            margin: '3rem 0',
        }}>{children}</span>;
};


export default Message;