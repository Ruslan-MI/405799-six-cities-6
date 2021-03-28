import {
  NameSpace,
} from "../reducers/root-reducer";

export const getActiveOfferID = (state) => state[NameSpace.PLACE_CARD].activeOfferID;
