import React from "react";
import PropTypes from "prop-types";

const FormTextarea = ({
  value,
  onChange
}) => {
  const handleReviewChange = (evt) => {
    onChange(evt.target.value);
  };

  return (
    <textarea className="reviews__textarea form__textarea" id="review" name="review"
      placeholder="Tell how was your stay, what you like and what can be improved"
      onChange={handleReviewChange} value={value} minLength="50" maxLength="300" />
  );
};

FormTextarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FormTextarea;
