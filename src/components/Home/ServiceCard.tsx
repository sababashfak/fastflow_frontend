import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TService } from "../../interfaces/service";

type ServiceCardProps = {
  service: TService;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { name, description, image, slug } = service;

  return (
    <div className="mx-auto grid max-w-md grid-cols-[auto_1fr] items-center gap-5 border bg-white p-8 sm:p-5 md:p-7">
      <img
        src={`/services/home/${image}`}
        alt={name}
        className="h-full max-h-[130px] w-20 object-cover xl:max-h-[115px] xl:w-24"
      />
      <div className="">
        <h3 className="border-b pb-3 font-semibold">{name}</h3>
        <p className="py-2.5 text-[15px] text-gray-500">{description}</p>
        <Link
          to={`/services/${slug}`}
          className="text-secondary flex items-center gap-2 text-[15px] font-medium duration-200 hover:gap-4"
        >
          Learn More
          <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
