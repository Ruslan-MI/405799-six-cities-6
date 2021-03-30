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
  reducer as userReducer,
} from "./user";
import {
  reducer as propertyPageReducer,
} from "./property-page";
import {
  StoreNameSpace
} from "../../const";

export default combineReducers({
  [StoreNameSpace.DATA]: dataReducer,
  [StoreNameSpace.MAIN_PAGE]: mainPageReducer,
  [StoreNameSpace.PLACE_CARD]: placeCardReducer,
  [StoreNameSpace.USER]: userReducer,
  [StoreNameSpace.PROPERTY_PAGE]: propertyPageReducer,
});
