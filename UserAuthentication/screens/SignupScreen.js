import {useContext, useState} from "react";
import {Alert} from "react-native";

import { createUser } from '../util/auth';
import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";


function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signUpHandler({email, password}){
    setIsAuthenticating(true);
    try{
    const token = await createUser(email, password);
    authCtx.authenticate(token);
    } catch (error){
      Alert.alert('SignUp Failed!',
          'Check your credentials or try again later!'
      );
    setIsAuthenticating(false);
    }
  }
  if (isAuthenticating){
    return <LoadingOverlay message="Creating User..." />
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
