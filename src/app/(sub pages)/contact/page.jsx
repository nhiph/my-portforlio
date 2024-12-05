import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import "./style.scss";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="contact">
        <h3>Get In Touch</h3>
        <form className="form">
          <div className="form-group">
            <input type="text" placeholder="NAME" className="form-control" />
            <input type="email" placeholder="EMAIL" className="form-control" />
            <textarea
              name="message"
              placeholder="MESSAGE"
              className="form-control"
            ></textarea>
          </div>
          <button className="submit-btn" type="submit">
            SUBMIT HERE
          </button>
        </form>
      </div>
    </>
  );
}
