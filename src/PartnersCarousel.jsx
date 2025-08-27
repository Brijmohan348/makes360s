import React from "react";
import {
  FaGoogle,
  FaFacebookF,
  FaAws,
  FaMicrosoft,
  FaApple,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaPaypal,
  FaGithub,
  FaSlack,
  FaStripe,
  FaShopify,
  FaYoutube,
  FaDropbox,
  FaPinterest,
  FaSnapchat,
  FaReddit,
  FaTiktok,
  FaWordpress,
} from "react-icons/fa";

const PartnersCarousel = () => {
  const partners = [
    { name: "Google", icon: <FaGoogle size={50} color="#4285F4" /> },
    { name: "Facebook", icon: <FaFacebookF size={50} color="#1877F2" /> },
    { name: "AWS", icon: <FaAws size={50} color="#FF9900" /> },
    { name: "Microsoft", icon: <FaMicrosoft size={50} color="#F25022" /> },
    { name: "Apple", icon: <FaApple size={50} color="#000000" /> },
    { name: "LinkedIn", icon: <FaLinkedin size={50} color="#0A66C2" /> },
    { name: "Instagram", icon: <FaInstagram size={50} color="#E4405F" /> },
    { name: "Twitter", icon: <FaTwitter size={50} color="#1DA1F2" /> },
    { name: "PayPal", icon: <FaPaypal size={50} color="#003087" /> },
    { name: "GitHub", icon: <FaGithub size={50} color="#181717" /> },
    { name: "Slack", icon: <FaSlack size={50} color="#4A154B" /> },
    { name: "Stripe", icon: <FaStripe size={50} color="#635BFF" /> },
    { name: "Shopify", icon: <FaShopify size={50} color="#96BF48" /> },
    { name: "YouTube", icon: <FaYoutube size={50} color="#FF0000" /> },
    { name: "Dropbox", icon: <FaDropbox size={50} color="#0061FF" /> },
    { name: "Pinterest", icon: <FaPinterest size={50} color="#E60023" /> },
    { name: "Snapchat", icon: <FaSnapchat size={50} color="#FFFC00" /> },
    { name: "Reddit", icon: <FaReddit size={50} color="#FF4500" /> },
    { name: "TikTok", icon: <FaTiktok size={50} color="#000000" /> },
    { name: "WordPress", icon: <FaWordpress size={50} color="#21759B" /> },
  ];

  const tickerItems = [...partners, ...partners]; // repeat for seamless scroll

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #007bff, #6610f2)",
        padding: "40px 0",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-4">
        <h3 className="fw-bold animate__animated animate__fadeInDown">
          In Association With
        </h3>
      </div>

      {/* Scrolling icons */}
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "scrollTicker 40s linear infinite",
        }}
      >
        {tickerItems.map((partner, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 40px",
              color: "#fff",
            }}
          >
            {partner.icon}
            <span style={{ marginTop: "5px", fontSize: "0.9rem" }}>
              {partner.name}
            </span>
          </div>
        ))}
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes scrollTicker {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default PartnersCarousel;
