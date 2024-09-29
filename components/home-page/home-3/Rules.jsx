"use client";
import Image from "next/image";

const submissionGuidelines = [
  "You must be following all Yourekaa social media accounts",
  "Participants must be part of the community",
  "Entries must be original work created by the participant with or without collaboration",
  "Entries must interpret the theme 'Fractured Beauty' in a way that is respectful and appropriate",
  "A team shouldn't exceed three members",
  "Submissions must be in visual creative formats. I.e. Images and videos",
  "Participants must make a video to pitch their submission, to explain their work",
  "Entries must be submitted through the designated platform",
  "Participants can submit only one entry",
  "Any entries after the submission deadline has passed are not valid"
];

const judgingCriteria = [
  {
    icon: "🎨",
    text: "Artistic Merit: Strength of overall artistic expression"
  },
  {
    icon: "💡",
    text: 'Thematic Depth: Thoughtful exploration of the theme "Fractured Beauty"'
  },
  {
    icon: "✍️",
    text: "Craftsmanship: Exceptional skill, technique, and attention to detail"
  },
  {
    icon: "🌟",
    text: "Originality: Innovation and distinctiveness in the submission"
  },
  {
    icon: "💥",
    text: "Overall Impression: Memorable and impactful, leaving a lasting impression"
  },
  {
    icon: "📢",
    text: "Presentation: Clarity, coherence, and visual appeal in communicating the vision"
  },
  {
    icon: "👍",
    text: "Engagement: The number of likes and engagement your submissions garner"
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
