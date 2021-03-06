const getMocks = () => {
  return [
    {
      bedrooms: 3,
      city: {
        location: {
          latitude: 52.390955,
          longitude: 4.853096,
          zoom: 10
        },
        name: `Amsterdam`
      },
      description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
      host: {
        avatarUrl: `img/avatar-angelina.jpg`,
        id: 3,
        isPro: true,
        name: `Angelina`
      },
      id: 1,
      images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
      isFavorite: false,
      isPremium: true,
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8
      },
      maxAdults: 4,
      previewImage: `img/apartment-01.jpg`,
      price: 120,
      rating: 4.8,
      title: `Beautiful & luxurious studio at great location`,
      type: `Apartment`
    },
    {
      bedrooms: 2,
      city: {
        location: {
          latitude: 52.369553,
          longitude: 4.853096,
          zoom: 10
        },
        name: `Amsterdam`
      },
      description: `Wood and stone place.`,
      goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`],
      host: {
        avatarUrl: `img/avatar-angelina.jpg`,
        id: 3,
        isPro: true,
        name: `Angelina`
      },
      id: 2,
      images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
      isFavorite: true,
      isPremium: false,
      location: {
        latitude: 52.369553943508,
        longitude: 4.85309666406198,
        zoom: 8
      },
      maxAdults: 2,
      previewImage: `img/apartment-02.jpg`,
      price: 80,
      rating: 2.5,
      title: `Wood and stone place.`,
      type: `Apartment`
    },
    {
      bedrooms: 3,
      city: {
        location: {
          latitude: 52.390955,
          longitude: 4.929309,
          zoom: 10
        },
        name: `Amsterdam`
      },
      description: `Nice, cozy, warm big bed apartment.`,
      goods: [`Kitchen`, `Cable TV`, `Washing machine`],
      host: {
        avatarUrl: `img/avatar-max.jpg`,
        id: 4,
        isPro: false,
        name: `Max`
      },
      id: 3,
      images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
      isFavorite: false,
      isPremium: false,
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8
      },
      maxAdults: 5,
      previewImage: `img/apartment-03.jpg`,
      price: 90,
      rating: 4.0,
      title: `Nice, cozy, warm big bed apartment.`,
      type: `Apartment`
    },
    {
      bedrooms: 1,
      city: {
        location: {
          latitude: 52.380955,
          longitude: 4.939309,
          zoom: 10
        },
        name: `Amsterdam`
      },
      description: `Canal View Prinsengracht.`,
      goods: [`Heating`, `Kitchen`, `Washing machine`],
      host: {
        avatarUrl: `img/avatar-max.jpg`,
        id: 4,
        isPro: false,
        name: `Max`
      },
      id: 4,
      images: [`img/apartment-01.jpg`, `img/apartment-02.jpg`],
      isFavorite: true,
      isPremium: false,
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8
      },
      maxAdults: 2,
      previewImage: `img/room.jpg`,
      price: 70,
      rating: 1.8,
      title: `Canal View Prinsengracht.`,
      type: `Private room`
    }
  ];
};

export default getMocks;
