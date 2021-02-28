import React from "react";
import Header from "../../containers/header";

const NotFoundPage = () => {
  return (
    <div className="page page--gray page--not-found">
      <Header />
      <main className="page__main page__main--not-found">
        <h1 style={{
          textAlign: `center`
        }}>404 Not Found</h1>
      </main>
    </div>
  );
};

export default NotFoundPage;
