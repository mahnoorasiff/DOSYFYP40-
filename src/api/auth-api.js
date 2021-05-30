import firebase from 'firebase/app'
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(true)
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAaUNdL8vHw8z53i5fJX-yekNhkaGB_hB0",
  authDomain: "simplelogin-f3bfd.firebaseapp.com",
  databaseURL: "https://simplelogin-f3bfd-default-rtdb.firebaseio.com",
  projectId: "simplelogin-f3bfd",
  storageBucket: "simplelogin-f3bfd.appspot.com",
  messagingSenderId: "170961750625",
  appId: "1:170961750625:web:1458c04a2663a4be1b7820",
  measurementId: "G-JFKBQ6DTTK"
};

try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  console.log(err)
}

export const logoutUser = () => {
  
 firebase.auth().signOut().then(function() {
  console.log('Signed Out');
}, function(error) {
  console.error('Sign Out Error', error);
})
return null
}



export const signUpUser = async ({ name, email, password }) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
    firebase.auth().currentUser.updateProfile({
      displayName: name,
    })
    let userID = user.user.uid
    firebase.database().ref('users/' + userID).set({
      name: name,
      password: password,
      email: email
    })
    await user.user.sendEmailVerification()
    //alert("Email Verfification has been sent. Please Verify")
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

export const loginUser = async ({ email, password }) => {
  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
    
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

export const sendEmailWithPassword = async (email) => {
  try {
    await firebase.auth().sendPasswordResetEmail(email)
    return {}
  } catch (error) {
    return {
      error: error.message,
    }
  }
}
