// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  // collection,
  // getDocs,
  // query,
  // where,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtBG4HxCJbYlLpVhE2kRXrEGiHzW-iJDA",
  authDomain: "ecommerce-react-33b42.firebaseapp.com",
  projectId: "ecommerce-react-33b42",
  storageBucket: "ecommerce-react-33b42.appspot.com",
  messagingSenderId: "67670676180",
  appId: "1:67670676180:web:a42cd2245f940418bf2141",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase

// const getProducts = async () => {
//   const response = await getDocs(collection(db), "products");
//   const listaProds = [];
//   response.forEach((document) =>
//     listaProds.push({ id: document.id, ...document.data() })
//   );
//   return listaProds;
// };

// // const filterByCategory = async (category) => {
// //   const q = query(collection(db, "products"), where );
// // };

// export default getProducts;
// // filterByCategory;
