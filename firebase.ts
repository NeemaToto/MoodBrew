import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzDSZRDXeaijXguLPVIjLZYQjwOts-Ctc",
  authDomain: "moodbrew-77da1.firebaseapp.com",
  projectId: "moodbrew-77da1",
  storageBucket: "moodbrew-77da1.appspot.com",
  messagingSenderId: "429695872906",
  appId: "1:429695872906:web:cde57df6dbf6ec1bbae273",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
