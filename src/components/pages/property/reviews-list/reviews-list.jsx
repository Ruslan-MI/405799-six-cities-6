import React from "react";
import ReviewsItem from "./reviews-item";
import {
  reviewsList as reviewsPropTypes,
} from "../../../../prop-types/reviews-validation";

const ReviewsList = ({
  reviews,
}) => (
  <ul className="reviews__list">
    {reviews.map((review) => <ReviewsItem key={review.id} review={review} />)}
  </ul>
);

ReviewsList.propTypes = {
  reviews: reviewsPropTypes,
};

export default ReviewsList;
