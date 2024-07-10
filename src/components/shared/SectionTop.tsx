import { cn } from "../../lib/utils";

type SectionTopProps = {
  title: string;
  subtitle: string;
  titleClass?: string;
  subtitleClass?: string;
  containerClass?: string;
  barClass?: string;
  leftBarClass?: string;
  rightBarClass?: string;
};

const SectionTop: React.FC<SectionTopProps> = ({
  title,
  subtitle,
  titleClass,
  subtitleClass,
  containerClass,
  leftBarClass,
  rightBarClass,

  barClass,
}) => {
  return (
    <div
      className={cn("flex flex-col items-center text-center", containerClass)}
    >
      <h4
        className={cn(
          "mb-1.5 text-[15px] font-semibold uppercase text-gray-400",
          titleClass,
        )}
      >
        {title}
      </h4>
      <h3
        className={cn(
          "text-secondary mb-5 text-3xl font-semibold xl:text-4xl",
          subtitleClass,
        )}
      >
        {subtitle}
      </h3>
      <div className={cn("grid w-16 grid-cols-2", barClass)}>
        <div className={cn("h-1.5 bg-primary", leftBarClass)}></div>
        <div className={cn("bg-secondary h-1.5", rightBarClass)}></div>
      </div>
    </div>
  );
};

export default SectionTop;
