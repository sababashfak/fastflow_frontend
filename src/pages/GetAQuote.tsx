import { requestQuote } from "@/api/quote";
import CustomFormField from "@/components/shared/CustomFormField";
import ScrollToPageTop from "@/components/shared/ScrollToPageTop";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().min(1, {
    message: "Please enter your name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  company: z.string().optional(),
  message: z.string().min(1, {
    message: "Please enter a message",
  }),
});

const GetAQuote = () => {
  const form = useForm({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const quoteMutation = useMutation({
    mutationFn: requestQuote,
    onSuccess: (result) => {
      if (result.success) {
        toast.success("Quote request sent successfully");

        form.reset();
      } else {
        toast.error("Failed to send quote request");
      }
    },
  });

  const handleRequestQuote = (data: any) => {
    quoteMutation.mutate(data);
  };

  return (
    <main>
      <ScrollToPageTop />
      <section className="bg-[url(/quote-cover.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="bg-black/80 py-20">
          <div className="container text-center">
            <h1 className="text-3xl font-bold text-white lg:text-4xl">
              Get a <span className="text-primary">Quote</span>
            </h1>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-lg rounded-lg bg-white p-5">
            <Form {...form}>
              <form
                className="space-y-4"
                onSubmit={form.handleSubmit(handleRequestQuote)}
              >
                <CustomFormField
                  label="Name"
                  name="name"
                  placeholder="Enter your name"
                  formControl={form.control}
                  disabled={quoteMutation.isPending}
                />
                <CustomFormField
                  label="Email"
                  name="email"
                  placeholder="Enter your email"
                  formControl={form.control}
                  disabled={quoteMutation.isPending}
                />
                <CustomFormField
                  label="Company"
                  name="company"
                  placeholder="Enter your company name"
                  formControl={form.control}
                  disabled={quoteMutation.isPending}
                />
                <CustomFormField
                  label="Message"
                  name="message"
                  placeholder="Enter your message"
                  formControl={form.control}
                  disabled={quoteMutation.isPending}
                  isTextArea
                />
                <Button
                  type="submit"
                  className="mx-auto block h-11 w-full max-w-xs bg-primary text-dark hover:bg-primary/90"
                  disabled={quoteMutation.isPending}
                >
                  {quoteMutation.isPending
                    ? "Sending Request..."
                    : "Request a Quote"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GetAQuote;
