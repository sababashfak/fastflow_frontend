import { cn } from "@/lib/utils";

type InputButtonProps = {
  option: {
    option_name: string;
    option_description?: string;
  };
  onOptionSelect: (value?: string) => void;
  isChecked: boolean;
};

const InputRadioButton = ({
  option,
  onOptionSelect,
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
        <h4 className="font-medium text-gray-800">{option.option_name}</h4>
        {option.option_description && (
          <p className="mt-1 text-[13px] text-gray-500">
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
        onChange={(e) => onOptionSelect(e.target.value)}
        hidden
      />
    </label>
  );
};

export default InputRadioButton;
