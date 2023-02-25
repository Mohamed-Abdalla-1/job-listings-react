import React from "react";

const Card = (props) => {
  return (
    <>
      {props.data.map((job) => (
        <div className="container">
          <div key={job.id}>
            <img src={job.logo} alt="Company Logo" />
          </div>
          <div>
            <div className="top">
              <p>{job.company}</p>
              {job.new && <p>NEW!</p>}
              {job.featured && <p>FEATURED</p>}
            </div>
            <p>{job.position}</p>
            <div className="bottom">
              <p>{job.postedAt}</p>
              <p>{job.contract}</p>
              <p>{job.location}</p>
            </div>
          </div>
          <div className="languages">
            {job.languages.map((language) => (
              <p>{language}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};


export default Card