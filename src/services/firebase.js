import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDQz1yucwtyODCmbMduaPBvpgfKh2ptN8U',
  authDomain: 'vuechat-a5cd7.firebaseapp.com',
  databaseURL: 'https://vuechat-a5cd7.firebaseio.com',
  projectId: 'vuechat-a5cd7',
  storageBucket: 'vuechat-a5cd7.appspot.com',
  messagingSenderId: '977897038103'
}

firebase.initializeApp(config)

const database = firebase.database()
const storage = firebase.storage()

export {
  database,
  storage
}
