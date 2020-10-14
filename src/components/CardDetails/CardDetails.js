import React from 'react';

const CardDetails = ({show}) => {
  console.log(show);
  // const { id } = props.match.params;
  return (
    <div className="container section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">
            Show Title -
            {show.name}
          </span>
          <p>Lorem Ipsum</p>
          <div className="card-image">
            <img
              src="http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"
              alt=""
            />
            <span className="card-title">Card Title</span>
          </div>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2020</div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
