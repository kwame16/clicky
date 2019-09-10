import React from 'react';

const Jumbtron = props => {
  return (
    <div
      className={
        props.dark
          ? 'jumbotron bg-dark text-light text-center'
          : 'jumbotron bg-light text-dark text-center'
      }>
      {/* TAKE STYLE OUT JUST TO MAKE A POINT */}
      <span className="m-3" style={{ fontSize: props.score * 20 || 30 }}>
        Score: {props.score}
      </span>
      <span className="m-3" style={{ fontSize: props.highScore * 20 || 30 }}>
        High Score: {props.highScore}
      </span>
    </div>
  );
};

export default Jumbtron;
