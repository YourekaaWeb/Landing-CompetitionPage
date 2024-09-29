"use client";

import React from "react";
// import "./CompetitionStages.module.css";

const CompetitionStages = () => {
  return (
    <section className="competitionStagesWrapper">
      {/* First Div */}
      <div className="stageContainer">
        <div className="card ">
          <small className="phase">Phase 1</small>
          <h6 className="heading text-white">Submission & Social Sharing</h6>
          <p className="description text-white">
            Submit your entry on Instagram and Facebook using the
            #DiscoverwithYourekaa hashtag. Encourage likes, comments, and shares
            to support your entry.
          </p>
        </div>
      </div>

      {/* Second Div */}
      <div className="stageContainer">
        <div className="card ">
          <small className="phase ">Phase 2</small>
          <h6 className="heading text-white">Review of submissions</h6>
          <p className="description text-white">
            Submitted entries will be reviewed, and successful participants will
            move to the next stage of public voting.
          </p>
        </div>
      </div>

      {/* Third Div */}
      <div className="stageContainer">
        <div className="card ">
          <small className="phase ">Phase 3</small>
          <h6 className="heading text-white">Judging of submissions</h6>
          <p className="description text-white">
            Finalists will have their works judged by a panel of experienced
            creatives. Submissions will be evaluated thoroughly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompetitionStages;
