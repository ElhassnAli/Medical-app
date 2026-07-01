import { FaFacebook, FaWhatsapp } from "react-icons/fa6";

function SocialMediaLinks() {
  return (
    <div className="md:flex hidden justify-center gap-5 items-center md:order-1 order-3">
      <a
        href="https://www.facebook.com/share/1ECkqogdJv/"
        target="_blank"
        rel="noopener"
        title="Go to Facebook Page"
      >
        <FaFacebook size={40} color="blue" />
      </a>
      <a
        href="https://wa.me/+2001012954398"
        target="_blank"
        rel="noopener"
        title="Go to Whatsapp"
      >
        <FaWhatsapp size={40} color="green" />
      </a>
    </div>
  );
}

export default SocialMediaLinks;
