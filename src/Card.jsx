import React from "react";

const Card = (props) => {
  return (
    <>
      {props.data.map((job) => (
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
            {job.languages.map((language) => (
              <p key={language} className="right">
                {language}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
