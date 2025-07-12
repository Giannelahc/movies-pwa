import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const MovieCardSkeleton = () => {
  return (
    <div className="movie-card-skeleton" style={{ width: 200, margin: '1rem' }}>
      <Skeleton height={300} width={200} />

      <Skeleton height={30} width={`80%`} style={{ marginTop: '1rem' }} />

      <Skeleton height={20} width={`60%`} style={{ marginTop: '0.5rem' }} />
    </div>
  );
};

export default MovieCardSkeleton;