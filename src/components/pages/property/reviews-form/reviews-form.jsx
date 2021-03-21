import React, {
  useState,
  useEffect
} from "react";
import PropTypes from "prop-types";
import {
  connect
} from "react-redux";
import FormRating from "./form-rating";
import FormTextarea from "./form-textarea";
import {
  sendReview
} from "../../../../store/api-actions";
import {
  reviewsList as reviewsPropTypes
} from "../../../../prop-types/reviews-validation";

const RATING_MIN_VALUE = 1;

const ReviewLength = {
  MIN: 50,
  MAX: 300
};

const ReviewsForm = ({
  offerID,
  onSubmit,
  reviews
}) => {
  const initialState = {
    rating: 0,
    review: ``
  };

  const [
    rating,
    setRating
  ] = useState(initialState.rating);

  const [
    review,
    setReview
  ] = useState(initialState.review);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      offerID,
      rating,
      review
    });
  };

  useEffect(() => {
    setRating(initialState.rating);
    setReview(initialState.review);
  }, [reviews]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <FormRating checkedRating={rating} onChange={setRating} />
      <FormTextarea value={review} onChange={setReview} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit"
          disabled={(rating < RATING_MIN_VALUE || review.length < ReviewLength.MIN || review.length > ReviewLength.MAX) ?
            true : false}>Submit</button>
      </div>
    </form>
  );
};

ReviewsForm.propTypes = {
  offerID: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  reviews: reviewsPropTypes
};

const mapStateToProps = (state) => ({
  reviews: state.reviews
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(review) {
    dispatch(sendReview(review));
  }
});

export {
  ReviewsForm
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsForm);
