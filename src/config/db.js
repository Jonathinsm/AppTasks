import firebase from 'firebase';

firebase.initializeApp (
  {
    apiKey: "AIzaSyAkH_Z2z0SPN3-qV_dWCCpNSd7l2BeQCfU",
    authDomain: "testfire-e028d.firebaseapp.com",
    databaseURL: "https://testfire-e028d.firebaseio.com",
    projectId: "testfire-e028d",
    storageBucket: "testfire-e028d.appspot.com",
    messagingSenderId: "351271839372"
  }
)

export const todosRef = firebase.database().ref('todos');
