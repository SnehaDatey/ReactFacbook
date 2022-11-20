import { createContext } from "react";

const UserContext = createContext({LoggedInUser:'', setLoggedInUser:()=> {}});

export default UserContext;