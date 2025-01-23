import { useEffect, useState } from "react";
import styles from "./MovieItem.css";

const imgUrl = "https://image.tmdb.org/t/p/w500";

const MovieItem = ({
  adult,
  poster_path,
  genre_ids,
  original_language,
  overview,
  popularity,
  title,
  release_date,
  vote_average,
  vote_count,
  id,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (id === 539972) {
      console.log({ isHovering });
    }
  }, [isHovering, id]);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
    >
      <div className={styles.hover.container({ isHovering })}>
        <img
          src={`${imgUrl}${poster_path}`}
          alt={title}
          width={100}
          height={50}
        />
        <div>
          <div>
            <ul>
              <li>
                <button>재생</button>
              </li>
              <li>
                <button>추가</button>
              </li>
              <li>
                <button>좋아요</button>
              </li>
            </ul>
            <button>아래로</button>
          </div>

          <div>
            <div>
              <span></span>
            </div>
            <p>영상길이</p>
          </div>
        </div>
      </div>

      <img
        src={`${imgUrl}${poster_path}`}
        alt={title}
        width={200}
        height={300}
      />
    </div>
  );
};

export default MovieItem;
