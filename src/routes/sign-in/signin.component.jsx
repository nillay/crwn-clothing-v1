import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils.js'


const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        // console.log("Radhe")
        createUserDocumentFromAuth(user);
    };
    return(
        <div>
            <h1> Sign-In Page</h1>
            <button onClick={logGoogleUser}>Sign-In With Google</button>
        </div>
    )
}

export default SignIn;