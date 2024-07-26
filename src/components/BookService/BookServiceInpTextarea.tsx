import { Textarea } from "../ui/textarea";

type BookServiceInpTextareaProps = {
  value: string;
  handleFormDataChange: (value: string) => void;
};

const BookServiceInpTextarea: React.FC<BookServiceInpTextareaProps> = ({
  value,
  handleFormDataChange,
}) => {
  return (
    <div>
      <Textarea
        value={value}
        onChange={(e) => handleFormDataChange(e.target.value)}
        className="h-32 p-4"
      />
    </div>
  );
};

export default BookServiceInpTextarea;
