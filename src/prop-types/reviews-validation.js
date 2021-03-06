import PropTypes from "prop-types";

export const reviewsItem = PropTypes.shape({
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
}).isRequired;

export const reviewsList = PropTypes.arrayOf(PropTypes.shape({
  ...reviewsItem
})).isRequired;
