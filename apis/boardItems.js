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
} from "firebase/firestore";

const db = getFirestore(app);

class boardItemsAPI {
  // boardItem 전체 불러오기
  getAllBoardItems = async (count) => {
    try {
      const col = collection(db, "boardItems");
      const q = count
        ? query(col, orderBy("createdAt", "desc"), limit(count))
        : query(col, orderBy("createdAt", "desc"));
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
  getBoardItem = async (id) => {
    try {
      const col = doc(db, "boardItems", id);
      const snapshot = await getDoc(col);
      if (snapshot) {
        return snapshot.data();
      }
    } catch (error) {
      console.error("error::", error);
    }
  };

  // boardItem 추가
  addBoardItem = async (data) => {
    const docRef = await addDoc(collection(db, "boardItems"), data);
    // console.log('docRef:', docRef)
    if (docRef?.id) {
      return docRef.id;
    }
  };

  // boardItem 삭제
  removeBoardItem = async (id) => {
    if (!id) throw new Error("id가 없습니다");
    await deleteDoc(doc(db, "boardItems", id));
    return true;
  };

  // boardItem 수정
  updateBoardItem = async (id, data) => {
    await setDoc(doc(db, "boardItems", id), data);
    return true;
  };

  // 조회수 추가
  addViewer = async (collection, id) => {
    const ref = doc(db, collection, id);
    const e = await updateDoc(ref, {
      viewer: increment(1),
    });
    console.log("e:", e);
  };
}

export default new boardItemsAPI();
