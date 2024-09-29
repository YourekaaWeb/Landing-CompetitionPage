"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function UnderMaintenance() {
  useEffect(() => {
    // Add any JavaScript for effects if needed
  }, []);

  return (
    <section
      className="maintenance-container"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#544bfa5", // secondary color
        backgroundColor: "#333",
        color: "#282c34",
        textAlign: "center"
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "4rem",
          color: "#ff0", // primary brand color
          fontWeight: "900"
        }}
      >
        Hi Explorer, you're not lost!
      </h1>

      {/* Subtext */}
      <p
        style={{
          fontSize: "1.5rem",
          maxWidth: "600px",
          margin: "20px 0",
          color: "#ccc"
        }}
      >
        We're just giving our site a little TLC. We'll be done before you know
        it. <br />
      </p>

      {/* Graphic or Logo */}
      <div
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundImage: "url('/path-to-image.jpg')", // replace with actual image
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: "20px 0"
        }}
      ></div>
      <p style={{ color: "#fff" }}>
        {" "}
        Join our community to know when we're back to awesome!
      </p>
      {/* Notification Button */}
      <Link
        href="https://chat.whatsapp.com/LS9Pekca5gr1VTeOe44n8l"
        style={{
          padding: "15px 30px",
          fontSize: "1.2rem",
          fontWeight: "700",
          border: "1px dotted #ff0", // dotted border in primary color
          backgroundColor: "#282c34",
          color: "#ff0",
          borderRadius: "50px",
          cursor: "pointer",
          transition: "transform 0.3s ease"
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        Join our community
      </Link>

      {/* Footer */}
      <footer style={{ marginTop: "50px", fontSize: "1rem", color: "#ff0" }}>
        Follow us on social media for updates
        <div className="pt-10">
          <span>
            <Link href="https://www.instagram.com/yourekaa.discover/">
              <Image
                width={70}
                height={50}
                src="/images/icon/instagram-icon.png"
              />
            </Link>
          </span>
          <span>
            {" "}
            <Link href="https://x.com/yourekaa_ ">
              <Image width={50} height={50} src="/images/icon/X-icon.png" />
            </Link>
          </span>
        </div>
      </footer>
    </section>
  );
}
