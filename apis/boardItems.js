import { app } from "~/plugins/appConfig";

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
  getCountFromServer,
} from "firebase/firestore";

const db = getFirestore(app);

class boardItemsAPI {
  // boardItem 전체 불러오기
  getAllBoardItems = async (category, count) => {
    try {
      const queryConstraints = [];
      if (category) queryConstraints.push(where("category", "==", category));
      if (count) queryConstraints.push(limit(count));
      queryConstraints.push(orderBy("createdAt", "desc"));

      // 최종 쿼리
      const q = query(collection(db, "boardItems"), ...queryConstraints);
      // console.log("q:", queryConstraints);
      const snapshot = await getDocs(q);
      if (snapshot) {
        const boardItems = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        return boardItems;
      }
    } catch (error) {
      console.error("error::", error);
    }
  };

  // boardItem 디테일 불러오기
  getBoardItem = async (no) => {
    try {
      const q = query(collection(db, "boardItems"), where("no", "==", no));
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

  // id 구하기
  getDocItem = async (no) => {
    try {
      const q = query(collection(db, "boardItems"), where("no", "==", no));
      const snapshot = await getDocs(q);
      if (snapshot) {
        const docs = snapshot?.docs.map((doc) => {
          return {
            id: doc.id,
          };
        });
        return docs[0].id;
      }
    } catch (error) {
      console.error("error::", error);
    }
  };

  // collection의 글 갯수 구하기
  // 글 갯수를 수정하면 no가 덮어져서 count가 아니라 변경됨
  // getBoardCount = async () => {
  //   const col = collection(db, "boardItems");
  //   const snapshot = await getCountFromServer(col);
  //   const count = snapshot.data().count;
  //   return count;
  // };

  // boardItem 추가
  addBoardItem = async (data) => {
    const response = new Promise(async (resolve, reject) => {
      try {
        const docRef = await addDoc(collection(db, "boardItems"), data);
        if (docRef) {
          return resolve(true);
        }
      } catch (error) {
        return reject(false);
      }
    });
    return response;
  };

  // boardItem 삭제
  removeBoardItem = async (no) => {
    if (!no) throw new Error("id가 없습니다");
    const response = new Promise(async (resolve, reject) => {
      const docId = await this.getDocItem(no);
      try {
        await deleteDoc(doc(db, "boardItems", docId));
        return resolve(true);
      } catch (error) {
        return reject(false);
      }
    });
    return response;
  };

  // boardItem 수정
  updateBoardItem = async (no, data) => {
    if (!no) throw new Error("id가 없습니다");
    const response = new Promise(async (resolve, reject) => {
      const docId = await this.getDocItem(no);
      try {
        await setDoc(doc(db, "boardItems", docId), data);
        return resolve(true);
      } catch (error) {
        return reject(false);
      }
    });
    return response;
  };

  // 게시판의 카테고리 불러오기
  getCategories = async () => {
    try {
      const snapshot = await getDocs(collection(db, "boardCategories"));
      if (snapshot) {
        const boardItems = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
          };
        });

        return boardItems;
      }
    } catch (error) {
      console.error("error::", error);
    }
  };

  // 조회수 추가
  incrementViewer = async (no) => {
    const docId = await this.getDocItem(no);
    if (docId) {
      const ref = doc(db, "boardItems", docId);
      updateDoc(ref, {
        viewer: increment(1),
      });
    }
  };

  // 좋아요 추가
  incrementLike = async (no) => {
    const docId = await this.getDocItem(no);
    if (docId) {
      const ref = doc(db, "boardItems", docId);
      updateDoc(ref, {
        like: increment(1),
      });
    }
  };

  // 글 신고하기
  reportBoardItem = async (data) => {
    const response = new Promise(async (resolve, reject) => {
      try {
        const docRef = await addDoc(collection(db, "boardReports"), data);
        if (docRef) {
          return resolve(true);
        }
      } catch (error) {
        return reject(false);
      }
    });
    return response;
  };
}

export default new boardItemsAPI();
