import PropTypes from "prop-types";

const favoriteCardPropTypes = {
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

const placeCardPropTypes = {
  ...favoriteCardPropTypes,
  isPremium: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

const getPropertyPagePropTypes = () => {
  const types = {
    ...placeCardPropTypes,
    images: PropTypes.arrayOf(PropTypes.string),
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired
    }),
    description: PropTypes.string
  };

  delete types.previewImage;
  delete types.id;

  return types;
};

export const favoriteCard = {
  offer: PropTypes.shape({
    ...favoriteCardPropTypes
  }).isRequired
};

export const favoriteCards = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    ...favoriteCardPropTypes
  })).isRequired
};

export const placeCard = {
  offer: PropTypes.shape({
    ...placeCardPropTypes
  }).isRequired
};

export const placeCards = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    ...placeCardPropTypes
  })).isRequired
};

export const propertyPages = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    ...getPropertyPagePropTypes()
  })).isRequired
};
