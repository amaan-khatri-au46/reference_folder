import React from "react";

const Profile = () => {
  // const [loggedIn, setLogedIn] = useState(3);
//   if elseif and else condition printing .... 
  let loggedIn = 2
  return <div>{loggedIn===1 ? <h1>Welcome User 1</h1> :loggedIn===2? <h1>Welcome User 2</h1> : <h1>Welecome User 3</h1>} </div>;
};

export default Profile;
