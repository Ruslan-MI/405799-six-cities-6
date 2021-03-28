import React, {
  memo,
} from "react";
import PropTypes from "prop-types";
import FormRatingInput from "./form-rating-input";

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
  onChange,
}) => {
  return (
    <div className="reviews__rating-form form__rating">
      {ratings.map((rating, i) => <FormRatingInput key={i} rating={rating}
        onChange={onChange} checked={checkedRating === rating.value} />)}
    </div>
  );
};

FormRating.propTypes = {
  checkedRating: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default memo(FormRating);
