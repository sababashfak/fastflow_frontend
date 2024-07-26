import { TStep } from "@/interfaces/categories";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Input } from "../ui/input";

type BookServiceInpRadioProps = {
  step: TStep;
  value: string;
  handleFormDataChange: (value: string) => void;
};

type InputButtonProps = {
  option: {
    option_name: string;
    option_description?: string;
  };
  handleFormDataChange: (value: string) => void;
  isChecked: boolean;
};

const InputRadioButton = ({
  option,
  handleFormDataChange,
  isChecked,
}: InputButtonProps) => {
  return (
    <label
      className={cn(
        "grid min-h-14 cursor-pointer grid-cols-[1fr_auto] items-center gap-x-4 rounded-[4px] border p-2.5 hover:border-gray-700",
        isChecked &&
          "border-gray-700 bg-[#F4F6FA] shadow-[0_0_0_1px_rgb(55,61,81)]",
      )}
    >
      <div>
        <h4 className="text-gray-700">{option.option_name}</h4>
        {option.option_description && (
          <p className="mt-1 text-sm text-gray-600">
            {option.option_description}
          </p>
        )}
      </div>
      <span
        className={cn(
          "block size-6 rounded-full border border-gray-300",
          isChecked && "border-8 border-gray-700",
        )}
      ></span>
      <input
        type="radio"
        name="radio"
        value={option.option_name}
        checked={isChecked}
        onChange={(e) => handleFormDataChange(e.target.value)}
        hidden
      />
    </label>
  );
};

const BookServiceInpRadio: React.FC<BookServiceInpRadioProps> = ({
  step,
  value,
  handleFormDataChange,
}) => {
  const [isOther, setIsOther] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      {step.step_option?.map((option, index) => {
        const isChecked = value === option.option_name;

        return (
          <InputRadioButton
            key={index}
            option={option}
            handleFormDataChange={(value: string) => {
              setIsOther(false);
              handleFormDataChange(value);
            }}
            isChecked={isChecked}
          />
        );
      })}
      <InputRadioButton
        option={{ option_name: "Other" }}
        handleFormDataChange={() => {
          setIsOther(true);
          handleFormDataChange("");
        }}
        isChecked={isOther}
      />
      {isOther && (
        <Input
          placeholder="Please specify here"
          onChange={(e) => {
            handleFormDataChange(e.target.value);
          }}
          className="h-auto px-2.5 py-3 text-base placeholder:text-gray-400"
        />
      )}
    </div>
  );
};

export default BookServiceInpRadio;
