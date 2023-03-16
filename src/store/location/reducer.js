import { USERDATA,CATEGORY} from "./action-types";

const initialState = {
  userData: [],
  category:'',
};

const location = (
  state = initialState,
  { type, payload = null }
) => {

  switch (type) {
    case USERDATA:
      return {
        ...state,
        userData: payload,
      };
      case CATEGORY:
        return {
          ...state,
          category: payload,
        };
    default:
      return state;
  }
};


export default location;