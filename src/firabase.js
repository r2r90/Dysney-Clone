import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app"
import { getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAR8eUywV0i_z4Rl0bVaSuPlLdRqFiq9Is",
    authDomain: "disneyplus-ytb.firebaseapp.com",
    projectId: "disneyplus-ytb",
    storageBucket: "disneyplus-ytb.appspot.com",
    messagingSenderId: "39116067528",
    appId: "1:39116067528:web:286d1349583069e47f0bfd"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)
  const authConfig = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  const storage = getStorage(firebaseApp);

  export {authConfig, provider, storage};
  export default db; // global object 