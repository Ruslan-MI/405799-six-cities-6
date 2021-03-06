const getReviews = () => {
  return [
    {
      comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      date: `2019-05-08T14:13:56.569Z`,
      id: 1,
      rating: 4,
      user: {
        avatarUrl: `img/avatar-max.jpg`,
        id: 4,
        isPro: false,
        name: `Max`
      }
    },
    {
      comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      date: `2019-05-08T14:13:56.569Z`,
      id: 1,
      rating: 3,
      user: {
        avatarUrl: `img/avatar-angelina.jpg`,
        id: 3,
        isPro: true,
        name: `Angelina`
      }
    }
  ];
};

export default getReviews;
