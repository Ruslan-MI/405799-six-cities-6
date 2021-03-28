import {
  combineReducers,
} from 'redux';
import {
  reducer as dataReducer,
} from './data';
import {
  reducer as mainPageReducer,
} from './main-page';
import {
  reducer as placeCardReducer,
} from './place-card';
import {
  reducer as userReducer
} from "./user";

export const NameSpace = {
  DATA: `DATA`,
  MAIN_PAGE: `MAIN_PAGE`,
  PLACE_CARD: `PLACE_CARD`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.MAIN_PAGE]: mainPageReducer,
  [NameSpace.PLACE_CARD]: placeCardReducer,
  [NameSpace.USER]: userReducer,
});
