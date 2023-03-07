import { app } from "~/plugins/appConfig";

// auth
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
const auth = getAuth(app);

// firestore
import {
  getFirestore,
  doc,
  addDoc,
  getDoc,
  setDoc,
  getDocs,
  deleteDoc,
  collection,
  query,
  orderBy,
  updateDoc,
  increment,
  limit,
  where,
} from "firebase/firestore";
const db = getFirestore(app);

class authAPI {
  currentUser = null;
  tester = auth.currentUser;

  // 회원가입
  signup = (info) => {
    const { id, email, nickname } = info;
    return createUserWithEmailAndPassword(auth, email, id)
      .then((userCredential) => {
        const user = userCredential.user;
        const data = {
          email: user.email,
          uid: user.uid,
          nickname,
        };
        const token = {
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
        };
        this.createUser(data);
        return { data, token };
      })
      .catch((error) => {
        switch (error.code) {
          // 계정이 이미 있는 경우 로그인 실행
          case "auth/email-already-in-use":
            return this.login(info);
          default:
            window.alert(`${error.code}:`, error.message);
            window.location.href = "/";
            break;
        }
        return;
      });
  };
  // 로그인
  login = (info) => {
    const { email, id, nickname } = info;
    return signInWithEmailAndPassword(auth, email, id)
      .then((response) => {
        const user = response.user;
        const data = {
          email: user.email,
          uid: user.uid,
          nickname,
        };
        const token = {
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
        };
        return { data, token };
      })
      .catch((error) => {
        switch (error.code) {
          // 계정이 없는경우 계정 생성
          case "auth/user-not-found":
            return this.signup(info);
          default:
            window.alert(`${error.code}:`, error.message);
            window.location.href = "/";
            break;
        }
        return;
      });
  };

  // 로그아웃
  logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        return true;
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  // 유저 정보 생성하기
  createUser = async (data) => {
    const docRef = await addDoc(collection(db, "users"), data);
    if (docRef?.id) {
      return docRef.id;
    }
  };

  // 유저 상태를 보존하고 불러오게하는 watcher
  authWatcher = async () => {
    const userPromise = new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user.email);
        } else {
          resolve(false);
        }
      });
    });
    return userPromise;
  };

  // 유저정보 불러오기
  getUserInfo = async (email) => {
    try {
      const q = query(collection(db, "users"), where("email", "==", email));
      const snapshot = await getDocs(q);
      if (snapshot) {
        const docs = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        // console.log("obj:", obj);
        return docs[0];
      }
    } catch (error) {
      console.error("error::", error);
    }
  };

  // 유저정보 저장하기
  setUserInfo = async (data) => {
    await setDoc(doc(db, "users", data.id), data);
    return true;
  };

  // 토큰 갱신 취소
  revokeRefreshTokens = (uid) => {
    // getAuth()
    //   .revokeRefreshTokens(uid)
    //   .then(() => {
    //     return getAuth().getUser(uid);
    //   })
    //   .then((userRecord) => {
    //     return new Date(userRecord.tokensValidAfterTime).getTime() / 1000;
    //   })
    //   .then((timestamp) => {
    //     console.log(`Tokens revoked at: ${timestamp}`);
    //   });
  };
}

export default new authAPI();
