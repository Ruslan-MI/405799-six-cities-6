import React from "react";
import PropTypes from "prop-types";

const FormRatingInput = ({
  rating,
  checked,
  onChange,
}) => {
  const {
    value,
    title,
  } = rating;

  const handleChange = () => {
    onChange(value);
  };

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio"
        onChange={handleChange} checked={checked} />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
};

FormRatingInput.propTypes = {
  rating: PropTypes.shape({
    value: PropTypes.number,
    title: PropTypes.string,
  }),
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormRatingInput;
