import React from "react";
import PropTypes from "prop-types";
import PremiumMark from "./premium-mark";
import {
  Link,
} from "react-router-dom";
import {
  connect,
} from "react-redux";
import {
  ActionCreator,
} from "../../store/action";
import {
  getWidthForRating,
} from "../../utils/common";
import {
  placeCard as offerPropTypes,
} from "../../prop-types/offers-validation";
import {
  AppRoute,
} from "../../const";

const PlaceCard = ({
  offer,
  onMouseEnter,
  onMouseLeave,
  isCitiesPlaceCard = false,
  isFavoriteCard = false,
  isNearPlacesCard = false,
}) => {
  const {
    isPremium,
    previewImage,
    price,
    isFavorite,
    rating,
    title,
    type,
    id,
  } = offer;

  const handleMouseEnter = () => {
    onMouseEnter(id);
  };

  const handleMouseLeave = () => {
    onMouseLeave();
  };

  return (
    <article className={`${isCitiesPlaceCard ? `cities__place-card` : ``}
                        ${isFavoriteCard ? `favorites__card` : ``}
                        ${isNearPlacesCard ? `near-places__card` : ``} place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isPremium && <PremiumMark />}
      <div className={`${isCitiesPlaceCard ? `cities__image-wrapper` : ``}
                      ${isFavoriteCard ? `favorites__image-wrapper` : ``}
                      ${isNearPlacesCard ? `near-places__image-wrapper` : ``} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={isFavoriteCard ? `150` : `260`}
            height={isFavoriteCard ? `110` : `200`} alt="Place image" />
        </a>
      </div>
      <div className={`${isFavoriteCard ? `favorites__card-info` : ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">${isFavorite ? `In` : `To`} bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{
              width: `${getWidthForRating(rating)}%`
            }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: offerPropTypes,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  isCitiesPlaceCard: PropTypes.bool,
  isFavoriteCard: PropTypes.bool,
  isNearPlacesCard: PropTypes.bool,
};

const mapDispatchToProps = (dispatch) => ({
  onMouseEnter(id) {
    dispatch(ActionCreator.changeActiveOfferID(id));
  },
  onMouseLeave() {
    dispatch(ActionCreator.resetActiveOfferID());
  },
});

export {
  PlaceCard,
};

export default connect(null, mapDispatchToProps)(PlaceCard);
