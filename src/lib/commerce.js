import Commerce from "@chec/commerce.js";

const API_KEY = process.env.REACT_APP_CHEC_PUBLIC_KEY;
export const commerce = new Commerce(API_KEY, true);
//NOTE TRUE IT MEAN CREATE COMMERCE STORE
