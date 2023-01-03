import { getMovieReview } from 'fetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    try {
      getMovieReview(movieId).then(response => {
        setReviews(response.data.results);
      });
    } catch (error) {
      alert(`${error.message} oooops`);
    }
  }, [movieId]);

  if (reviews) {
    return (
      <div maxwidth="1000px">
        {reviews.length !== 0 ? (
          <ul>
            {reviews.map(review => {
              return (
                <li key={review.id}>
                  <h3>Author: {review.author}</h3>
                  <p>{review.content}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </div>
    );
  }
};

export default Reviews;
