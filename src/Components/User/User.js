import React from 'react';

const User = (props) => {
      // console.log(props);
      const {first_name,email, salary, Phone} = props.user
      const userStyle ={
            border: '1px solid red',
            margin : '10px',
            padding: '10px'
      }
      const handleAddFriend = props.handleAddFriend;
      return (
            <div style={userStyle}>
                  
                  <h2>{first_name}</h2>
                  <p>Email : {email}</p>
                  <p>salary :{salary}</p>
                  <p>Phone :{Phone}</p>
                  <button onClick={()=>handleAddFriend(props.user)}>Add Friends</button>
                  
            </div>
      );
};

export default User;