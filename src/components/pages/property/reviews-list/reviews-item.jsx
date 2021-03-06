import React from "react";
import {
  getWidthForRating,
  getDateTimeForReviewsTime,
  getDateForReviewsTime
} from "../../../../utils/common";
import {
  reviewsItem as reviewPropTypes
} from "../../../../prop-types/reviews-validation";

const ReviewsItem = ({
  review
}) => {
  const {
    rating,
    comment,
    date,
    user: {
      avatarUrl,
      name
    }
  } = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54"
            alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{
              width: `${getWidthForRating(rating)}%`
            }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={getDateTimeForReviewsTime(date)}>{getDateForReviewsTime(date)}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: reviewPropTypes
};

export default ReviewsItem;
