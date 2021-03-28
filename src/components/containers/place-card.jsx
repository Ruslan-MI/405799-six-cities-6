import React, {
  memo,
  useMemo,
} from "react";
import PropTypes from "prop-types";
import PremiumMark from "./premium-mark";
import {
  Link,
} from "react-router-dom";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import {
  changeActiveOfferID,
  resetActiveOfferID,
} from "../../store/actions/place-card";
import {
  getWidthForRating,
} from "../../utils/common";
import {
  placeCard as offerPropTypes,
} from "../../prop-types/offers-validation";
import {
  AppRoute,
  AuthorizationStatus,
  StoreNameSpace,
} from "../../const";
import {
  toggleFavoriteStatus,
} from "../../store/api-actions";

const PlaceCard = ({
  offer,
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

  const {
    authorizationStatus,
  } = useSelector((state) => state[StoreNameSpace.USER]);

  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    if (isCitiesPlaceCard) {
      dispatch(changeActiveOfferID(id));
    }
  };

  const handleMouseLeave = () => {
    if (isCitiesPlaceCard) {
      dispatch(resetActiveOfferID());
    }
  };

  const handleFavoriteClick = () => {
    if (isAuthorized) {
      dispatch(toggleFavoriteStatus({
        id,
        isFavorite,
      }));
    }
  };

  const handleImageClick = (evt) => {
    evt.preventDefault();
  };

  return (
    <article className={`${isCitiesPlaceCard ? `cities__place-card` : ``}
                        ${isFavoriteCard ? `favorites__card` : ``}
                        ${isNearPlacesCard ? `near-places__card` : ``} place-card`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isPremium && <PremiumMark />}
      <div className={`${isCitiesPlaceCard ? `cities__image-wrapper` : ``}
                      ${isFavoriteCard ? `favorites__image-wrapper` : ``}
                      ${isNearPlacesCard ? `near-places__image-wrapper` : ``} place-card__image-wrapper`}>
        <a href="#" onClick={handleImageClick}>
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
          {useMemo(() => <Link to={`${AppRoute.OFFER}/${id}`}>{title}</Link>, [])}
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
};

export default memo(PlaceCard);
