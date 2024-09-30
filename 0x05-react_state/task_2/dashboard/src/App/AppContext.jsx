import React from "react";
const user = {
    email: "",
    password: "",
    isLoggedIn: false
}
function logOut() {

}
const AppContext = createContext({
    user, logOut
});
export default AppContext;