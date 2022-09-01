import React, { useState } from "react";
import styles from "./MainPage.module.css";
import MoviePreview from "../Movies/MoviePreview";
import SearchForm from "./SearchForm";
import Header from "../Sections/Header";
import NewReviews from "./NewReviews";
import Watchlist from "./Watchlist";
import Footer from "../Sections/Footer";
import MovieReview from "../Movies/MovieReview";

const MainPage = () => {
  const [movieReviewModal, setMovieReviewModal] = useState(false);

  const showMovieReviewHandler = (event) => {
    event.preventDefault();
    setMovieReviewModal(true);
  };

  const dismissMovieReviewHandler = () => {
    setMovieReviewModal(false);
  };

  return (
    <React.Fragment>
      <Header />
      <section className="mt-16">
        <div className="flex flex-col lg:flex-row text-white">
          <MoviePreview
            className={`sm:basis-full lg:basis-3/5 ${styles["bg-image-full"]}`}
            title="Today's Pick: Deadpool"
            rating="7.5"
            snapshot="Some little synopsis about this movie that would encourage you to want to watch it."
            style={{ backgroundImage: "url(/Images/6366.jpg)" }}
            onClick={showMovieReviewHandler}
          />

          {/* Hidden for and Large Devices */}
          <div className="basis-full lg:hidden mx-auto py-14 w-full text-center bg-gradient-to-b from-slate-900 to-gray-800">
            <p className="pb-5 text-2xl">Looking for something?</p>
            <SearchForm />
          </div>

          {/* Hidden for Mobile and Medium Devices */}
          <div
            className={`hidden lg:basis-2/5 lg:flex flex-row ${styles["no-padding"]}`}
          >
            <div
              className={`basis-1/2 ${styles["bg-image-half"]}`}
              style={{ backgroundImage: "url(/Images/6366.jpg)" }}
            ></div>
            <div
              className={`basis-1/2 mt-0.5 ${styles["bg-image-half"]}`}
              style={{ backgroundImage: "url(/Images/morbius.jpg)" }}
            ></div>
          </div>
        </div>
      </section>
      <NewReviews  className={`text-gray-100 ${styles["bg-image-full"]}`} />
      <Watchlist />
      <Footer className={styles['bg-image-footer']} style={{backgroundImage: "url(/Images/footer-bg.jpg)"}} />

      {movieReviewModal && <MovieReview onDismiss={dismissMovieReviewHandler}/>}
    </React.Fragment>
  );
};

export default MainPage;
