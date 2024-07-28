import { useState } from "react";
import { Textarea } from "../ui/textarea";

type BookServiceInpTextareaProps = {
  onDescriptionChange?: (description: string) => void;
};

const BookServiceInpTextarea: React.FC<BookServiceInpTextareaProps> = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold text-gray-900 sm:text-xl">
        Add a description to your job
      </h3>
      <Textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="h-32 p-4"
        placeholder="Please provide more details about your plumbing needs"
      />
    </div>
  );
};

export default BookServiceInpTextarea;
