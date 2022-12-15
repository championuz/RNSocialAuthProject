import React, { useState, useEffect } from "react";
import Auth0, {useAuth0} from "react-native-auth0";
import jwtDecode from "jwt-decode";

const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
    const {authorize, clearSession, user} = useAuth0();
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(null);
    const [userData, setUserData] = useState(null);

    const auth0 = new Auth0({
        domain: "dev-356anii6km5f8o1i.us.auth0.com",
        clientId: "4U7gGOmwCrSGfKrMxbPhjVecNLCelNRZ",
      });
      
      const login = async () => {
        try {
          const user_auth = await auth0.webAuth.authorize({
            scope: 'openid email profile',
          });
          setLoggedIn(true);
          const user_details = jwtDecode(user_auth.idToken);
          console.log(user_details)
          setUserData(user_details);
        } catch (err) {
          alert(err+ 'Error logging in');
        }
      };

      const logout = async () => {
        try {
          await auth0.webAuth.clearSession({});
          setLoggedIn(false);
          setUserData(null);
        } catch (err) {
          alert('Error logging out');
        }
      };

      const value = {
        loading,
        loggedIn,
        login,
        logout,
        userData,
      };
    
      return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
      );
    };
    
    export { AuthContext, AuthContextProvider };