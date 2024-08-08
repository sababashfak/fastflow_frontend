import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomFormField from "../shared/CustomFormField";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

const contactSchema = z.object({
  name: z.string().min(1, {
    message: "Please enter your name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  subject: z.string().min(1, {
    message: "Please enter a subject",
  }),
  message: z.string().min(1, {
    message: "Please enter a message",
  }),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleContact = (data: any) => {
    console.log(data);
  };

  return (
    <div className="rounded-md border bg-white p-3 sm:p-5">
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(handleContact)}>
          <div className="grid grid-cols-2 gap-3">
            <CustomFormField
              label="Name"
              name="name"
              placeholder="Enter your name"
              formControl={form.control}
            />
            <CustomFormField
              label="Email"
              name="email"
              placeholder="Enter your email"
              formControl={form.control}
            />
          </div>
          <CustomFormField
            label="Subject"
            name="subject"
            placeholder="Enter your subject"
            formControl={form.control}
          />
          <CustomFormField
            label="Message"
            name="message"
            placeholder="Enter your message"
            formControl={form.control}
            isTextArea
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
