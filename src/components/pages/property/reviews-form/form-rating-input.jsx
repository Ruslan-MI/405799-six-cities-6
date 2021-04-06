import React from "react";
import PropTypes from "prop-types";

const FormRatingInput = ({
  rating,
  checked,
  isDisabled,
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
        onChange={handleChange} checked={checked} disabled={isDisabled} />
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
    value: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  checked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormRatingInput;
