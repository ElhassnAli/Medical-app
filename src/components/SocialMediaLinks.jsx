import { FaFacebook, FaWhatsapp } from "react-icons/fa6";

function SocialMediaLinks({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <a
        href="https://www.facebook.com/share/1ECkqogdJv/"
        target="_blank"
        rel="noreferrer nofollow"
        title="Go to Facebook Page"
      >
        <div className="rounded-full border border-blue-200 bg-blue-50 p-2 text-blue-600 transition hover:-translate-y-0.5 hover:bg-blue-100">
          <FaFacebook size={22} />
        </div>
      </a>
      <a
        href="https://wa.me/+2001012954398?text=Hello%20Medical%20Store%2C%20I%20would%20like%20to%20contact%20you."
        target="_blank"
        rel="noreferrer nofollow"
        title="Go to Whatsapp"
      >
        <div className="rounded-full border border-emerald-200 bg-emerald-50 p-2 text-emerald-600 transition hover:-translate-y-0.5 hover:bg-emerald-100">
          <FaWhatsapp size={22} />
        </div>
      </a>
    </div>
  );
}

export default SocialMediaLinks;
