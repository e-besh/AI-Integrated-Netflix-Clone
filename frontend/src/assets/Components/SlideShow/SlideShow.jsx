import React from "react";
import styles from "./SlideShow.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function SlideShow({ title, movie }) {
  return (
    <div className={styles.slideShowContainer}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.Row}>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={5.4}
        >
          {movie?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
         
        </Swiper>
        {/* <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={5.4}
          breakpoints={{
            // <--- MOVE IT HERE
            // when window width is >= 320px (mobile)
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            // when window width is >= 768px (tablet)
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            // when window width is >= 1024px (desktop)
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
        >
          {movie?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
    </div>
  );
}

export default SlideShow;
