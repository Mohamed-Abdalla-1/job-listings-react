import React from "react";

const Card = ({ data, handleClick }) => {
  return (
    <>
      {data.map((job) => (
        <div className="container" key={job.id}>
          <div className="left">
            <div>
              <img src={job.logo} alt="Company Logo" />
            </div>
            <div>
              <div className="top">
                <p>{job.company}</p>
                {job.new && <p className="new">NEW!</p>}
                {job.featured && <p className="featured">FEATURED</p>}
              </div>
              <p>{job.position}</p>
              <div className="bottom">
                <p>{job.postedAt}</p>
                <p>{job.contract}</p>
                <p>{job.location}</p>
              </div>
            </div>
          </div>

          <div className="languages">
            <li className="right" value={1} onClick={handleClick}>
              {job.role}
            </li>
            <li className="right" value={2} onClick={handleClick}>
              {job.level}
            </li>
            {job.languages.map((language) => (
              <li
                key={language}
                className="right"
                value={3}
                onClick={handleClick}
              >
                {language}
              </li>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
