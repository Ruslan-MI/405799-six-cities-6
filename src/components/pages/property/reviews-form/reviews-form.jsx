import React, {
  useState
} from "react";
import FormRating from "./form-rating";
import FormTextarea from "./form-textarea";

const ReviewsForm = () => {
  const [
    rating,
    setRating
  ] = useState(0);

  const [
    review,
    setReview
  ] = useState(``);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <FormRating checkedRating={rating} onChange={setRating} />
      <FormTextarea value={review} onChange={setReview} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
      </div>
    </form>
  );
};

export default ReviewsForm;
