import { contact } from "@/api/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
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
  mobileNo: z.string().min(10, {
    message: "Please enter a valid mobile number",
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
      mobileNo: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: contact,
    onSuccess: (result) => {
      if (result.success) {
        toast.success("Message sent successfully");

        form.reset();
      } else {
        toast.error("Failed to send message");
      }
    },
  });

  const handleContact = (data: any) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="rounded-md bg-white p-3 sm:p-5 xl:p-6">
      <h2 className="mb-5 text-xl font-semibold lg:text-2xl xl:text-[26px]">
        Send Message
      </h2>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(handleContact)}>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
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
            label="Mobile No"
            name="mobileNo"
            placeholder="Enter your mobile number"
            formControl={form.control}
          />
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
          <Button
            className="block h-auto bg-secondary px-5 py-3.5 hover:bg-secondary/95 sm:text-[15px]"
            type="submit"
            disabled={contactMutation.isPending}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
