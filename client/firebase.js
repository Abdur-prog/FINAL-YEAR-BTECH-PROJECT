import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
const firebaseConfig={
apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
authDomain: "disease-prediction-fbdfa.firebaseapp.com",
projectId: "disease-prediction-fbdfa",
storageBucket: "disease-prediction-fbdfa.firebasestorage.app",
messagingSenderId: "85523353100",
appId: "1:85523353100:web:cf03dc90b63e1d21c4e829",
measurementId: "G-RG92BVGV52"
}
const app=initializeApp(firebaseConfig);
const auth=getAuth();
export {app,auth};