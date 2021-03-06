import PropTypes from "prop-types";

const placeCardPropTypes = {
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};

const getPropertyPagePropTypes = () => {
  const types = {
    ...placeCardPropTypes,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired
    }),
    description: PropTypes.string.isRequired
  };

  delete types.previewImage;
  delete types.id;

  return types;
};

export const placeCard = PropTypes.shape({
  ...placeCardPropTypes
}).isRequired;

export const placeCards = PropTypes.arrayOf(PropTypes.shape({
  ...placeCardPropTypes
})).isRequired;

export const propertyPage = PropTypes.shape({
  ...getPropertyPagePropTypes()
}).isRequired;

export const propertyPages = PropTypes.arrayOf(PropTypes.shape({
  ...getPropertyPagePropTypes()
})).isRequired;

export const map = PropTypes.arrayOf(PropTypes.shape({
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    })
  }),
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  })
})).isRequired;
