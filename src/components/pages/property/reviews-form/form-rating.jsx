import React from "react";
import PropTypes from "prop-types";
import FormRatingInput from "./form-rating-input";
import {
  appendIDForArrayItems,
} from "../../../../utils/common";

const ratings = [
  {
    value: 5,
    title: `perfect`,
  },
  {
    value: 4,
    title: `good`,
  },
  {
    value: 3,
    title: `not bad`,
  },
  {
    value: 2,
    title: `badly`,
  },
  {
    value: 1,
    title: `terribly`,
  }
];

const FormRating = ({
  checkedRating,
  isDisabled,
  onChange,
}) => (
  <div className="reviews__rating-form form__rating">
    {appendIDForArrayItems(ratings).map(({
      item,
      id,
    }) => <FormRatingInput key={id} rating={item}
      onChange={onChange} checked={checkedRating === item.value} isDisabled={isDisabled} />)}
  </div>
);

FormRating.propTypes = {
  checkedRating: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormRating;
