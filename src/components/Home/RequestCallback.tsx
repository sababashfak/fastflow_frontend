import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RequestCallbackData } from "../../interfaces/callback";
import CustomFormField from "../shared/CustomFormField";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

const callbackSchema = z.object({
  name: z.string().min(1, {
    message: "Please enter your name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number",
  }),
  company: z.string().optional(),
});

const RequestCallback = () => {
  const form = useForm({
    resolver: zodResolver(callbackSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
    },
  });

  const handleRequestCallback = (data: RequestCallbackData) => {
    console.log(data);
  };

  return (
    <section className="relative z-[1] overflow-hidden py-16 md:py-20">
      <div className="container pt-10 lg:pt-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr]">
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-3xl font-semibold text-primary">
              Request a Callback
            </h4>
            <p className="mx-auto max-w-xl text-white/90 md:mx-0">
              Need more information? Request a callback and our team will get in
              touch with you shortly to discuss your project needs.
            </p>
          </div>
          <div className="mx-auto w-full max-w-md rounded-md bg-white p-5 shadow-[0_2px_10px_rgba(0,0,0,0.075)] md:min-w-[380px]">
            <Form {...form}>
              <form
                className="space-y-4"
                onSubmit={form.handleSubmit(handleRequestCallback)}
              >
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
                <CustomFormField
                  label="Phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  formControl={form.control}
                />
                <CustomFormField
                  label="Company"
                  name="company"
                  placeholder="Enter your company name"
                  formControl={form.control}
                />
                <Button
                  type="submit"
                  className="h-11 w-full bg-primary text-dark hover:bg-primary/90"
                >
                  Request Callback
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-[-1] h-1/2 max-h-[360px] w-full bg-[url(/living-room.jpg)] bg-cover bg-fixed bg-no-repeat">
        <div className="h-full w-full bg-black/70" />
      </div>
    </section>
  );
};

export default RequestCallback;
