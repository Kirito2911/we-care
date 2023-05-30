// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs, addDoc, setDoc, doc, updateDoc, deleteDoc} from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC0J4xbK_9ZEm6P1Wnfbnt0LiRabCdeGA",
  authDomain: "wecare-1270f.firebaseapp.com",
  projectId: "wecare-1270f",
  storageBucket: "wecare-1270f.appspot.com",
  messagingSenderId: "850560401646",
  appId: "1:850560401646:web:87aa1fc6d701229d7df3ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getData () {
  const querySnapshot = await getDocs(collection(db, "community"));
    let data = []
    querySnapshot.forEach((doc) => {
      data.push(
        {
          "id":doc.id,
          "data":doc.data()
        }
      )
    });

    return data;
}
export async function getDataRepublic () {
    const querySnapshot = await getDocs(collection(db, "republic"));
      let data = []
      querySnapshot.forEach((doc) => {
        data.push(
          {
            "id":doc.id,
            "data":doc.data()
          }
        )
      });
  
      return data;
  }
  export async function getDataEvent() {
    const querySnapshot = await getDocs(collection(db, "event"));
      let data = []
      querySnapshot.forEach((doc) => {
        data.push(
          {
            "id":doc.id,
            "data":doc.data()
          }
        )
      });
  
      return data;
  }
  