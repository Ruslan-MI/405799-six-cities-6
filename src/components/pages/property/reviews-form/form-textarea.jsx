import React from "react";
import PropTypes from "prop-types";

const FormTextarea = ({
  value,
  isDisabled,
  onChange,
}) => {
  const handleReviewChange = (evt) => {
    onChange(evt.target.value);
  };

  return (
    <textarea className="reviews__textarea form__textarea" id="review" name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      onChange={handleReviewChange} value={value} minLength="50" maxLength="300"
      disabled={isDisabled} />
  );
};

FormTextarea.propTypes = {
  value: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormTextarea;
