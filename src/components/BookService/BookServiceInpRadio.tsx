import { TStep } from "@/interfaces/categories";
import { useState } from "react";
import { Input } from "../ui/input";
import InputRadioButton from "./InputRadioButton";

type BookServiceInpRadioProps = {
  step: TStep;
  question: string;
  value: string;
  handleFormDataChange: (question: string, answer: string) => void;
};

const BookServiceInpRadio: React.FC<BookServiceInpRadioProps> = ({
  step,
  question,
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
              handleFormDataChange(question, value);
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
