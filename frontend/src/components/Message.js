import React from "react";

const Message = ({ children }) => {
  return <span style={{
            display: 'block',
            textAlign: 'center',
            marginTop: '6rem'
        }}>{children}</span>;
};


export default Message;