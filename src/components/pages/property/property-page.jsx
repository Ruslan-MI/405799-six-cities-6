import React from "react";
import Header from "../../containers/header";
import PropertyGallery from "./property-gallery";
import PremiumMark from "../../containers/premium-mark";
import PropertyInside from "./property-inside";
import ReviewsForm from "./reviews-form/reviews-form";
import NearPlaces from "./near-places/near-places";
import {
  getWidthForRating
} from "../../../utils/common";
import {
  propertyPage as offerPropTypes,
  propertyPages as offersPropTypes
} from "../../../prop-types/offers-validation";
import PropertyDescription from "./property-description";

const PropertyPage = ({
  offer,
  offers
}) => {
  const {
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
      isPro
    },
    description
  } = offer;

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
                <button className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}`} type="button">
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <li className="reviews__item">
                    <div className="reviews__user user">
                      <div className="reviews__avatar-wrapper user__avatar-wrapper">
                        <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54"
                          alt="Reviews avatar" />
                      </div>
                      <span className="reviews__user-name">Max</span>
                    </div>
                    <div className="reviews__info">
                      <div className="reviews__rating rating">
                        <div className="reviews__stars rating__stars">
                          <span style={{
                            width: `80%`
                          }}></span>
                          <span className="visually-hidden">Rating</span>
                        </div>
                      </div>
                      <p className="reviews__text">
                        A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The
                        building is green and from 18th century.
                      </p>
                      <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                    </div>
                  </li>
                </ul>
                <ReviewsForm />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <NearPlaces offers={offers} />
      </main >
    </div >
  );
};

PropertyPage.propTypes = {
  offer: offerPropTypes,
  offers: offersPropTypes
};

export default PropertyPage;
