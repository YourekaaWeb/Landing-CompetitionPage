import React from "react";

const Newsletter = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.mailerlite.com/js/universal.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      {" "}
      <iframe
        style={{ border: "none", width: "100%", height: "500px" }}
        src="YOUR_MAILERLITE_EMBED_URL"
        title="Subscribe to our newsletter"
      ></iframe>
    </div>
  );
};

export default Newsletter;
