"use client";
import Image from "next/image";

const submissionGuidelines = [
  "You must be following all Yourekaa social media accounts",
  "Warriors must be part of the community.",
  "Entries must be original work created by the participant with or without collaboration.",
  "Entries must interpret the theme 'Fractured Beauty' respectfully and appropriately.",
  "A team should not exceed three members.",
  "Submissions must be in visual creative formats, i.e. images and videos.",
  "Warriors must make a video to pitch their submission and explain their work.",
  "Entries must be submitted through the designated platform.",
  "Warriors can submit only one entry.",
  "Any entries after the submission deadline has passed are not valid."
];

const judgingCriteria = [
  {
    icon: "🎨",
    text: "Artistic Merit: The strength of your submission regarding overall artistic expression."
  },
  {
    icon: "💡",
    text: "Thematic Depth: How well your submission reflects 'Fractured Beauty.'"
  },
  {
    icon: "✍️",
    text: "Craftsmanship: The skill, technique, and attention to detail that your work reflects."
  },
  {
    icon: "🌟",
    text: "Originality: How innovative and distinctive is your submission compared to others?"
  },
  {
    icon: "💥",
    text: "Overall Impression: The propensity of your submission to leave a lasting impression on the mind of the battle masters and everyone who sees it."
  },
  {
    icon: "📢",
    text: "Presentation: The clarity, coherence, and visual appeal of your submission to communicate your idea in a simple yet distinct way."
  },
  {
    icon: "👍",
    text: "Engagement: The amount of likes and engagement your submissions garner."
  }
];

export default function CompetitionGuidelines() {
  return (
    <section className="competitionGuidelines-container">
      <div style={{ maxWidth: "1450px", margin: "0 auto" }}>
        {/* Section Header */}
        {/* <div className="heading-container">
          <h2>SuBMiSSioN Guidelines & Judging Criteria</h2>
        </div> */}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            backgroundColor: "#ffffff55"
          }}
          className="container position-relative"
        >
          <Image
            width={170}
            height={110}
            src="/images/gallery/competitionsImages/prize-gold.png"
            className="position-absolute"
          />
          {/* Submission Guidelines Section */}
          {/* <div className="d-flex"> */}{" "}
          <div className="guidelines-container">
            <h3
              style={{
                textTransform: "capitalize",
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: "25px",
                paddingTop: "10px",
                color: "#333"
              }}
            >
              Submission Guidelines
            </h3>
            <ul style={{ listStyleType: "none", padding: "0" }}>
              {submissionGuidelines.map((guideline, index) => (
                <div className="d-flex gap-2" key={index}>
                  {" "}
                  <span> ✔️</span>{" "}
                  <li
                    style={{
                      marginBottom: "10px",
                      borderBottom: "1px solid #c6eae1",
                      paddingBottom: "0.5rem",
                      width: "100%"
                    }}
                  >
                    {guideline}
                  </li>
                </div>
              ))}
            </ul>
          </div>
          {/* Judging Criteria Section */}
          <div className="guidelines-container">
            <h3
              style={{
                textTransform: "capitalize",
                fontWeight: "bold",
                marginBottom: "25px",
                paddingTop: "10px",
                textAlign: "center",
                color: "#111"
              }}
            >
              Judging Criteria
            </h3>
            <ul style={{ listStyleType: "none", padding: "0" }}>
              {judgingCriteria.map((criteria, index) => (
                <div className="d-flex gap-2" key={index}>
                  {" "}
                  <span> {criteria.icon}</span>{" "}
                  <li
                    style={{
                      marginBottom: "10px",
                      borderBottom: "1px solid #c6eae1",
                      paddingBottom: "0.5rem",
                      width: "100%"
                    }}
                  >
                    {criteria.text}
                  </li>
                </div>
              ))}
            </ul>
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
