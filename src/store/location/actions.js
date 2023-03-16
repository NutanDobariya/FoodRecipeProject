import { USERDATA,CATEGORY} from "./action-types";
export function userData(payload) {
  return {
    type: USERDATA,
    payload,
  };
}

export function category(payload) {
  return {
    type: CATEGORY,
    payload,
  };
}

