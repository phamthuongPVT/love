// firebase-config.js
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-storage.js";

// Cấu hình Firebase của bạn
const firebaseConfig = {
    apiKey: "AIzaSyDjaY0NIvmTemxkiFfInuwammNT1KoV8Bk",
    authDomain: "staynowapp1.firebaseapp.com",
    databaseURL: "https://staynowapp1-default-rtdb.firebaseio.com",
    projectId: "staynowapp1",
    storageBucket: "staynowapp1.appspot.com",
    messagingSenderId: "918655571270",
    appId: "1:918655571270:web:4faf239e74e2c95becc147",
    measurementId: "G-HL2349KPLW"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {
    db,
    collection,
    addDoc,
    app,
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
    doc,
    getDoc
};