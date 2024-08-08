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
      <section className="bg-gray-100">
        <div className="container py-16 md:py-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 rounded-md lg:grid-cols-2">
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
                  to="tel:+44-7946-193824"
                  className="flex items-center gap-2.5"
                >
                  <IoCallOutline className="text-xl text-blue-500" />
                  <span className="text-[15px] duration-300 hover:text-blue-500">
                    +44-7946-193824
                  </span>
                </Link>
                <Link
                  target="_blank"
                  to="mailto:fastflowgassafeengineer@gmail.com"
                  className="flex items-center gap-2.5"
                >
                  <IoMailOutline className="text-xl text-blue-500" />
                  <span className="text-[15px] duration-300 hover:text-blue-500">
                    fastflowgassafeengineer@gmail.com
                  </span>
                </Link>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
