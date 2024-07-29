import { Textarea } from "../ui/textarea";

type BookServiceInpTextareaProps = {
  description: string;
  onDescriptionChange: (description: string) => void;
};

const BookServiceInpTextarea: React.FC<BookServiceInpTextareaProps> = ({
  description,
  onDescriptionChange,
}) => {
  return (
    <div>
      <h3 className="mb-5 text-lg font-semibold text-gray-900 sm:text-xl">
        Add a description to your job
      </h3>
      <Textarea
        value={description}
        onChange={(e) => onDescriptionChange(e.target.value)}
        className="h-32 p-4"
        placeholder="Please provide more details about your plumbing needs"
      />
    </div>
  );
};

export default BookServiceInpTextarea;
