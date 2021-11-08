import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer dPL6HeB9SqLsLUEXUEVhrb_3MgEFVom4-FZ0z9pjmai9FNhq24oMPidAL-rltS_JaQD9p9eEyHOmNR32SoGhxAY8H9sCjpVnaiqZhaXTyj_JCkCc58KKjw_A_JNaYXYx",
  },
});
