import { USERDATA,MUTE} from "./action-types";
export function userData(payload: any) {
  return {
    type: USERDATA,
    payload,
  };
}

export function mute(payload: any) {
  return {
    type: MUTE,
    payload,
  };
}

