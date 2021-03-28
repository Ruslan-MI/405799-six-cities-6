import React, {
  memo,
} from "react";
import ReviewsItem from "./reviews-item";
import {
  reviewsList as reviewsPropTypes,
} from "../../../../prop-types/reviews-validation";

const ReviewsList = ({
  reviews,
}) => {
  return (
    <ul className="reviews__list">
      {reviews.map((review, i) => <ReviewsItem key={i} review={review} />)}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: reviewsPropTypes,
};

export default memo(ReviewsList);
