import { TStep, TStepOption } from "@/interfaces/categories";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import InputRadioButton from "./InputRadioButton";

type FormData = {
  question: string;
  answer: string;
};

type BookServiceStepProps = {
  steps: TStep;
  currentStep: number;
  stepIndex: number;
  formData: FormData[];
  handleFormDataSet: (question: string, answer: string) => void;
  setIsLastStep: (isLastStep: boolean) => void;
};

const BookServiceStep: React.FC<BookServiceStepProps> = ({
  steps,
  currentStep,
  stepIndex,
  formData,
  handleFormDataSet,
  setIsLastStep,
}) => {
  const isCheckbox = steps.step_type === "checkbox";
  const [isOther, setIsOther] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TStepOption | null>(
    null,
  );
  const [selectedOptions, setSelectedOptions] = useState<TStepOption[]>([]);

  const handleOptionSelect = (option: TStepOption) => {
    if (!isCheckbox) {
      setSelectedOption(option);
    }

    if (isCheckbox) {
      const isChecked = selectedOptions.some(
        (selectedOption) => selectedOption.option_name === option.option_name,
      );

      if (isChecked) {
        setSelectedOptions((prev) =>
          prev.filter(
            (selectedOption) =>
              selectedOption.option_name !== option.option_name,
          ),
        );
      } else {
        setSelectedOptions((prev) => [...prev, option]);
      }
    }

    setIsOther(false);
  };

  useEffect(() => {
    handleFormDataSet(steps.step_name, selectedOption?.option_name || "");

    if (selectedOption?.option_name && !selectedOption?.substeps) {
      setIsLastStep(true);
    } else {
      setIsLastStep(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOption?.option_name]);

  useEffect(() => {
    const selectedOptionsName = selectedOptions.map(
      (selectedOption) => selectedOption.option_name,
    );

    handleFormDataSet(steps.step_name, selectedOptionsName.join(", "));

    if (selectedOptions.length > 0 && !selectedOptions[0].substeps) {
      setIsLastStep(true);
    } else {
      setIsLastStep(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions]);

  return (
    <>
      <div
        className={cn(
          currentStep > stepIndex && "pointer-events-none opacity-70",
        )}
      >
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-gray-900 sm:text-xl">
            {steps.step_name}
          </h3>
          {steps.step_description && (
            <p className="mt-0.5 text-[15px] text-gray-500">
              {steps.step_description}
            </p>
          )}
        </div>
        <div className="space-y-3">
          {steps.step_options?.map((option, index) => {
            const isChecked = !isCheckbox
              ? selectedOption?.option_name === option.option_name
              : selectedOptions.some(
                  (selectedOption) =>
                    selectedOption.option_name === option.option_name,
                );

            return (
              <InputRadioButton
                key={index}
                option={{
                  option_name: option.option_name,
                  option_description: option.option_description,
                }}
                isChecked={isChecked}
                onOptionSelect={() => handleOptionSelect(option)}
                isCheckbox={isCheckbox}
              />
            );
          })}
          {steps.step_type !== "checkbox" && (
            <InputRadioButton
              option={{ option_name: "Other" }}
              onOptionSelect={() => {
                setIsOther(true);
                setSelectedOption({
                  option_name: "",
                  option_description: "",
                });
              }}
              isChecked={isOther}
            />
          )}
          {isOther && steps.step_type !== "checkbox" && (
            <Input
              placeholder="Please specify here"
              onChange={(e) => {
                setSelectedOption({
                  option_name: e.target.value,
                });
              }}
              className="h-auto border-gray-300 px-2.5 py-3 text-base placeholder:text-gray-400"
            />
          )}
        </div>
      </div>
      {currentStep > stepIndex &&
        ((!isCheckbox && selectedOption?.substeps) ||
          (isCheckbox && selectedOptions[0]?.substeps)) && (
          <BookServiceStep
            steps={
              (!isCheckbox
                ? selectedOption?.substeps
                : selectedOptions[0]?.substeps) as TStep
            }
            currentStep={currentStep}
            stepIndex={stepIndex + 1}
            formData={formData}
            handleFormDataSet={handleFormDataSet}
            setIsLastStep={setIsLastStep}
          />
        )}
    </>
  );
};

export default BookServiceStep;
