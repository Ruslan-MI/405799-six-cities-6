import React from "react";
import PropTypes from "prop-types";
import {
  connect,
} from "react-redux";
import Header from "../../containers/header";
import PropertyGallery from "./property-gallery";
import PremiumMark from "../../containers/premium-mark";
import PropertyInside from "./property-inside";
import ReviewsList from "./reviews-list/reviews-list";
import ReviewsForm from "./reviews-form/reviews-form";
import PropertyMap from "./property-map";
import NearPlaces from "./near-places/near-places";
import PropertyDescription from "./property-description";
import withLoad from "../../hoc/with-load";
import {
  getWidthForRating,
} from "../../../utils/common";
import {
  propertyPage as offerPropTypes,
  propertyPages as offersPropTypes,
} from "../../../prop-types/offers-validation";
import {
  reviewsList as reviewsPropTypes,
} from "../../../prop-types/reviews-validation";
import {
  AuthorizationStatus,
} from "../../../const";
import {
  toggleFavoriteStatus,
} from "../../../store/api-actions";

const PropertyPage = ({
  propertyPageOffer,
  reviews,
  nearbyOffers,
  authorizationStatus,
  onFavoriteClick,
}) => {
  const {
    id,
    images,
    isPremium,
    title,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host: {
      avatarUrl,
      name,
      isPro,
    },
    description,
  } = propertyPageOffer;

  const isNearOffersAvailable = nearbyOffers.length > 0;

  const handleFavoriteClick = () => {
    onFavoriteClick({
      id,
      isFavorite,
    });
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          {images.length > 0 && <PropertyGallery images={images} />}
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <PremiumMark isPropertyPage />}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}`}
                  onClick={handleFavoriteClick} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{
                    width: `${getWidthForRating(rating)}%`
                  }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{type}</li>
                <li className="property__feature property__feature--bedrooms">{bedrooms} {bedrooms > 1 ? `Bedrooms` : `Bedroom`}</li>
                <li className="property__feature property__feature--adults">Max {maxAdults} {maxAdults > 1 ? `adults` : `adult`}</li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              {goods.length > 0 && <PropertyInside goods={goods} />}
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper ${isPro ? `property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74"
                      alt="Host avatar" />
                  </div>
                  <span className="property__user-name">{name}</span>
                </div>
                {description && <PropertyDescription description={description} />}
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                {reviews.length > 0 && <ReviewsList reviews={reviews} />}
                {authorizationStatus === AuthorizationStatus.AUTH && <ReviewsForm offerID={id} />}
              </section>
            </div>
          </div>
          {isNearOffersAvailable && <PropertyMap nearbyOffers={nearbyOffers} />}
        </section>
        {isNearOffersAvailable && <NearPlaces nearbyOffers={nearbyOffers} />}
      </main >
    </div >
  );
};

PropertyPage.propTypes = {
  propertyPageOffer: offerPropTypes,
  reviews: reviewsPropTypes,
  nearbyOffers: offersPropTypes,
  authorizationStatus: PropTypes.string.isRequired,
  onFavoriteClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  propertyPageOffer: state.propertyPageOffer,
  reviews: state.reviews,
  nearbyOffers: state.nearbyOffers,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteClick(data) {
    dispatch(toggleFavoriteStatus(data));
  },
});

export {
  PropertyPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(withLoad(PropertyPage));
