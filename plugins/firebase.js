import authAPI from "~/apis/auth";
import boardItemsAPI from "~/apis/boardItems";
import storageAPI from "~/apis/storage";
import newsAPI from "~/apis/news";
import newsletterAPI from "~/apis/newsletter";
import discussionAPI from "~/apis/discussion";

export default ({ app }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject("firebase", () => {
    return {
      ...authAPI,
      ...boardItemsAPI,
      ...storageAPI,
      ...newsAPI,
      ...newsletterAPI,
      ...discussionAPI,
    };
  });
};
