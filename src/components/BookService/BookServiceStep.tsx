import { TStep } from "@/interfaces/categories";
import { cn } from "@/lib/utils";
import BookServiceInpImage from "./BookServiceInpImage";
import BookServiceInpRadio from "./BookServiceInpRadio";
import BookServiceInpTextarea from "./BookServiceInpTextarea";

type BookServiceStepProps = {
  step: TStep;
  index: number;
  currentStep: number;
  value: string;
  handleFormDataChange: (value: string) => void;
};

const BookServiceStep: React.FC<BookServiceStepProps> = ({
  step,
  index,
  currentStep,
  value,
  handleFormDataChange,
}) => {
  return (
    <div
      id={`step-${index}`}
      className={cn(
        "hidden",
        currentStep >= index && "block",
        currentStep !== index && "pointer-events-none opacity-70",
      )}
    >
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
          {step.step_name}
        </h3>
        {step.step_description && (
          <p className="mt-0.5 text-[15px] text-gray-500">
            {step.step_description}
          </p>
        )}
      </div>
      {step.step_type === "radio" && (
        <BookServiceInpRadio
          step={step}
          value={value}
          handleFormDataChange={handleFormDataChange}
        />
      )}
      {step.step_type === "textarea" && (
        <BookServiceInpTextarea
          value={value}
          handleFormDataChange={handleFormDataChange}
        />
      )}
      {step.step_type === "image" && (
        <BookServiceInpImage
          value={value}
          handleFormDataChange={handleFormDataChange}
        />
      )}
    </div>
  );
};

export default BookServiceStep;
