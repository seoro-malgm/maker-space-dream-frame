import { app } from "@/plugins/appConfig";
// auth
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import errorCodes from "@/data/errorCodes.json";

const auth = getAuth(app);

class authAPI {
  login = ({ email, pwd }) => {
    return signInWithEmailAndPassword(auth, email, pwd)
      .then((response) => {
        // console.log("response:", response);
        const user = response?.user;
        if (user) {
          const { accessToken: token } = user;
          // 리턴
          return token;
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        window.toast(
          errorCodes?.auth[errorCode] || "에러로 인해 로그인에 실패했습니다.",
          {
            toaster: "b-toaster-bottom-left",
          }
        );
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
}

export default new authAPI();
