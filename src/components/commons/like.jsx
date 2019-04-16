import React from 'react';

const Like = ({ movie, onLike }) => {
  let classes = 'clickable fa fa-heart';

  return (
    <i
      className={movie.liked ? classes : classes + '-o'}
      onClick={() => onLike(movie)}
    />
  );
};

export default Like;
