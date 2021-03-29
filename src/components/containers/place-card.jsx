import React from "react";
import PropTypes from "prop-types";
import PremiumMark from "./premium-mark";
import {
  Link,
} from "react-router-dom";
import {
  useDispatch,
} from "react-redux";
import {
  getWidthForRating,
} from "../../utils/common";
import {
  placeCard as offerPropTypes,
} from "../../prop-types/offers-validation";
import {
  AppRoute,
} from "../../const";
import {
  toggleFavoriteStatus,
} from "../../store/api-actions";

const PlaceCard = ({
  offer,
  isCitiesPlaceCard = false,
  isFavoriteCard = false,
  isNearPlacesCard = false,
  onMouseEnter = () => { },
  onMouseLeave = () => { },
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

  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    onMouseEnter(id);
  };

  const handleMouseLeave = () => {
    onMouseLeave();
  };

  const handleFavoriteClick = () => {
    dispatch(toggleFavoriteStatus({
      id,
      isFavorite,
    }));
  };

  return (
    <article className={`${isCitiesPlaceCard ? `cities__place-card` : ``}
                        ${isFavoriteCard ? `favorites__card` : ``}
                        ${isNearPlacesCard ? `near-places__card` : ``} place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isPremium && <PremiumMark />}
      <div className={`${isCitiesPlaceCard ? `cities__image-wrapper` : ``}
                      ${isFavoriteCard ? `favorites__image-wrapper` : ``}
                      ${isNearPlacesCard ? `near-places__image-wrapper` : ``} place-card__image-wrapper`}>
        <Link to={`${AppRoute.OFFER}/${id}`}>
          <img className="place-card__image" src={previewImage} width={isFavoriteCard ? `150` : `260`}
            height={isFavoriteCard ? `110` : `200`} alt="Place image" />
        </Link>
      </div>
      <div className={`${isFavoriteCard ? `favorites__card-info` : ``} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button"
            onClick={handleFavoriteClick}>
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
  isCitiesPlaceCard: PropTypes.bool,
  isFavoriteCard: PropTypes.bool,
  isNearPlacesCard: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default PlaceCard;
