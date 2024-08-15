import ContactForm from "@/components/Contact/ContactForm";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main>
      <section className="bg-[url(/contact-cover.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/80 py-20">
          <div className="container text-center">
            <h3 className="text-3xl font-bold text-white lg:text-4xl">
              Contact <span className="text-primary">Us</span>
            </h3>
          </div>
        </div>
      </section>
      <section className="bg-gray-200/70">
        <div className="container py-16 md:py-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 rounded-md md:grid-cols-2">
            <div className="text-[#232021]">
              <h4 className="mb-2.5 text-sm font-semibold uppercase lg:mb-4 lg:text-base">
                Contact us
              </h4>
              <h2 className="mb-2.5 text-[22px] font-bold uppercase leading-tight lg:mb-5 lg:text-3xl xl:text-4xl">
                Have questions? <br />
                Get in touch!
              </h2>
              <p className="mb-5 max-w-md text-[#656565] lg:mb-7">
                We are here to help you. If you have any questions or need
                assistance, feel free to contact us.
              </p>
              <div className="flex flex-col items-start gap-3.5 lg:gap-4">
                <Link
                  target="_blank"
                  to="https://maps.app.goo.gl/V879nD6SdMz9yyNg7"
                  className="flex items-center gap-2.5"
                >
                  <IoLocationOutline className="text-xl text-blue-500" />
                  <span className="text-[15px] duration-300 hover:text-blue-500">
                    The Watermark, 9-15 Ribbleton Lane, Preston, PR1 5EZ
                  </span>
                </Link>
                <Link
                  target="_blank"
                  to="tel:01772230145"
                  className="flex items-center gap-2.5"
                >
                  <IoCallOutline className="text-xl text-blue-500" />
                  <span className="text-[15px] duration-300 hover:text-blue-500">
                    01772230145
                  </span>
                </Link>
                <Link
                  target="_blank"
                  to="mailto:info@ffhp.co.uk"
                  className="flex items-center gap-2.5"
                >
                  <IoMailOutline className="text-xl text-blue-500" />
                  <span className="text-[15px] duration-300 hover:text-blue-500">
                    info@ffhp.co.uk
                  </span>
                </Link>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.5130033665882!2d-2.6895819999999997!3d53.7625542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b72683fb1a23b%3A0xc08d8d8b7aec0b09!2sThe%20Watermark%2C%209-15%20Ribbleton%20Ln%2C%20Preston%20PR1%205EZ%2C%20UK!5e0!3m2!1sen!2sbd!4v1723185587758!5m2!1sen!2sbd"
          className="h-[360px] w-full sm:h-[400px]"
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
};

export default Contact;
