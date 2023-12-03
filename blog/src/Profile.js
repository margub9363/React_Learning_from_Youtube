import { useState } from "react";

function Profile() {
  // 1-> User
  // 2 -> Admin
  // 3 -> Guest
  const [loggedInProfile, setLoggedInProfile] = useState(3);
  const newLocal = (
    <span>
      {loggedInProfile == 1 ? (
        <h1>User</h1>
      ) : loggedInProfile == 2 ? (
        <h1>Admin</h1>
      ) : (
        <h1>Guest</h1>
      )}
    </span>
  );
  return (
    <span>
      <h1>Welcome </h1> {newLocal}
    </span>
  );
}

export default Profile;
