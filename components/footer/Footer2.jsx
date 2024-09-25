const columns = [
  {
    title: "Contact",
    links: [
      { label: "hello@yourekaa.com", url: "mailto:hello@yourekaa.com" },
      { label: "Tel: 09045130086", url: "tel:09045130086" }
      // { label: "About us", url: "/" },
      // { label: "Service", url: "/" },
      // { label: "Blog", url: "/" }
    ]
  },
  {
    title: "Menu",
    links: [
      {
        label: "Join our community",
        url: "https://chat.whatsapp.com/LS9Pekca5gr1VTeOe44n8l"
      },
      { label: "Share your story", url: "ailto:hello@yourekaa.com" }
      // { label: "Report Abuse", url: "/" },
      // { label: "Live", url: "/" }
    ]
  },
  {
    title: "Social",
    links: [
      { label: "Twitter", url: "https://x.com/yourekaa_" },
      {
        label: "Instagram",
        url: "https://www.instagram.com/yourekaa.discover/"
      },
      { label: "Facebook", url: "/" },
      { label: "Linkedin", url: "/" }
      // { label: "Dedicated hosting", url: "/" }
    ]
  }
];

const Footer2 = () => {
  return (
    <>
      {columns.map((column, index) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 mb-30 " key={index}>
          <h5 className="footer-title tx-dark text-white fw-normal">
            {column.title}
          </h5>
          <ul className="footer-nav-link style-none text=white">
            {column.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Footer2;
