import { USERDATA,MUTE} from "./action-types";

const initialState = {
  userData: [],
  mute:false,
};

const location = (
  state = initialState,
  { type, payload = null }: any
): any => {

  switch (type) {
    case USERDATA:
      return {
        ...state,
        userData: payload,
      };
      case MUTE:
        return {
          ...state,
          mute: payload,
        };
    default:
      return state;
  }
};


export default location;