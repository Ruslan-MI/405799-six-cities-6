import {
  StoreNameSpace,
} from "../../const";

export const getActiveOfferID = (state) => state[StoreNameSpace.PLACE_CARD].activeOfferID;
