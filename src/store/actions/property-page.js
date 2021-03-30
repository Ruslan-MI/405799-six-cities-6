import {
  createAction,
} from "@reduxjs/toolkit";

export const ActionType = {
  DISABLE_REVIEW_FORM: `propertyPage/disableRewiewForm`,
  ENABLE_REVIEW_FORM: `propertyPage/enableRewiewForm`,
};

export const disableRewiewForm = createAction(ActionType.DISABLE_REVIEW_FORM);

export const enableRewiewForm = createAction(ActionType.ENABLE_REVIEW_FORM);
