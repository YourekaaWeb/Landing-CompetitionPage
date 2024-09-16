"use client";
import React from "react";
// import "./styles.css"; // Make sure you import your external CSS

export default function CompetitionStages() {
  return (
    <section className="competition-stages-wrapper">
      {/* First Div */}
      <div className="stage-container">
        <div className="card">
          <small className="pb-3">Phase 1</small>
          <h6>Submission & Social Sharing</h6>
          <p className="">
            Submit your entry on Instagram and Facebook using the
            #DiscoverwithYourekaa hashtag Encourage likes, comments, and shares
            to support their entry.
          </p>
        </div>
      </div>

      {/* Second Div */}
      <div className="stage-container">
        <div className="card">
          <small className="pb-3">Phase 2</small>
          <h6>Review of submissions</h6>
          <p>
            Submitted entries will be reviewed and successful participants will
            make it to the next stage of public voting. (The general public will
            vote and decide who makes it to the final stage).
          </p>
        </div>
      </div>

      {/* Third Div */}
      <div className="stage-container">
        <div className="card">
          <small className="pb-3">Phase 3</small>
          <h6>Judging of submissions</h6>
          <p>
            The finalists who made it through public voting will have their
            works judged by a panel of judges comprising experienced creatives.
            Submissions will be judged
          </p>
        </div>
      </div>
    </section>
  );
}
