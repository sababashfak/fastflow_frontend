import { createBooking } from "@/api/booking";
import { TCategory } from "@/interfaces/categories";
import { cn } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import BookServiceInpImage from "./BookServiceInpImage";
import BookServiceInpTextarea from "./BookServiceInpTextarea";
import BookServiceStep from "./BookServiceStep";

type BookServiceFormProps = {
  categories: TCategory[];
  defaultCategory: TCategory | undefined;
  defaultEmail: string | undefined;
};

type FormData = {
  question: string;
  answer: string;
};

const BookServiceForm: React.FC<BookServiceFormProps> = ({
  categories,
  defaultCategory,
  defaultEmail,
}) => {
  const [category, setCategory] = useState<TCategory | undefined>(
    defaultCategory,
  );
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isLastStep, setIsLastStep] = useState<boolean>(false);
  const [isDescription, setIsDescription] = useState<boolean>(false);
  const [isPhotoUpload, setIsPhotoUpload] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData[]>([]);
  const [description, setDescription] = useState<string>("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [email, setEmail] = useState<string>(defaultEmail || "");
  const [phone, setPhone] = useState<string>("");
  const [isCredentials, setIsCredentials] = useState<boolean>(false);

  const steps = category?.steps;

  const handleCategoryChange = (slug: string) => {
    const newCategory = categories.find(
      (category) => category.cat_slug === slug,
    );
    setCategory(newCategory);
  };

  const handleFormDataSet = (question: string, answer: string) => {
    setFormData((prev) => {
      const newFormData = [...prev];
      newFormData[currentStep] = {
        question,
        answer,
      };
      return newFormData;
    });
  };

  const queryClient = useQueryClient();

  const bookingMutation = useMutation({
    mutationFn: (data: any) => createBooking(photos, data),
    onSuccess: (result) => {
      if (!result.success) {
        return toast.error(result.message || "Service booking failed!");
      }

      toast.success("Service booked successfully!");

      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });

      setCategory(undefined);
      setCurrentStep(0);
      setFormData([]);
      setDescription("");
      setPhotos([]);
      setIsLastStep(false);
      setIsDescription(false);
      setIsPhotoUpload(false);
      setEmail(defaultEmail || "");
      setPhone("");
    },
  });

  const handleBooking = async (data: any) => {
    bookingMutation.mutate(data);
  };

  const handleContinue = () => {
    if (!category) {
      return toast.error("Please select a category");
    }

    if (!isLastStep && !formData[currentStep]?.answer) {
      return toast.error("Please provide the required information");
    }

    if (!isLastStep) {
      return setCurrentStep(currentStep + 1);
    }

    if (isLastStep && !isDescription) {
      return setIsDescription(true);
    }

    if (isLastStep && isDescription && !isPhotoUpload) {
      if (!description) {
        return toast.error("Please provide a description");
      }

      return setIsPhotoUpload(true);
    }

    if (isLastStep && isPhotoUpload && !isCredentials && !defaultEmail) {
      if (!photos.length) {
        return toast.error("Please upload at least one photo");
      }

      return setIsCredentials(true);
    }

    if (isLastStep && isPhotoUpload && (isCredentials || defaultEmail)) {
      if (isCredentials && !email) {
        return toast.error("Please provide an email address");
      }

      const data = {
        category: category?.cat_name,
        qnas: formData,
        description,
        email: email || defaultEmail,
        phone: defaultEmail ? "" : phone,
      };

      return handleBooking(data);
    }
  };

  const handleBack = () => {
    if (currentStep === 0) {
      return setCategory(undefined);
    }

    if (isCredentials) {
      setEmail("");
      setPhone("");
      return setIsCredentials(false);
    }

    if (isPhotoUpload) {
      setPhotos([]);
      return setIsPhotoUpload(false);
    }

    if (isDescription) {
      setDescription("");
      setIsDescription(false);

      return setIsLastStep(false);
    }

    setFormData((prev) => {
      const newFormData = [...prev];
      newFormData[currentStep] = {
        question: "",
        answer: "",
      };
      return newFormData;
    });

    setCurrentStep(currentStep - 1);
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="grid max-w-[640px] grid-cols-1 space-y-20">
          <div className={cn(!!category && "pointer-events-none opacity-70")}>
            <h3 className="mb-5 text-lg font-semibold text-gray-900 sm:text-xl">
              What would you like to have done?
            </h3>
            <div className="">
              <select
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="min-h-14 w-full cursor-pointer rounded-[4px] border p-2.5 font-medium text-gray-800 hover:border-gray-300 focus:outline-none"
                value={category?.cat_slug || ""}
              >
                <option value="" disabled>
                  Select a Category
                </option>
                {categories.map((category, index) => (
                  <option key={index} value={category.cat_slug}>
                    {category.cat_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {!!category && (
            <BookServiceStep
              steps={steps!}
              stepIndex={0}
              currentStep={currentStep}
              formData={formData}
              handleFormDataSet={handleFormDataSet}
              setIsLastStep={setIsLastStep}
            />
          )}
          {isLastStep && isDescription && (
            <BookServiceInpTextarea
              description={description}
              onDescriptionChange={(value) => setDescription(value)}
            />
          )}
          {isLastStep && isPhotoUpload && (
            <BookServiceInpImage setPhotos={setPhotos} />
          )}
          {isLastStep && isCredentials && (
            <div className="max-w-[480px] space-y-6 pb-1">
              <h3 className="text-lg font-semibold leading-tight">
                Please provide your contact information so we can reach out to
                you:
              </h3>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value as string)}
                  className="px-4 py-[22px] text-base"
                  placeholder="Enter your email address"
                  id="email"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value as string)}
                  className="px-4 py-[22px] text-base"
                  placeholder="Enter your phone number (optional)"
                  id="email"
                  required
                />
              </div>
            </div>
          )}
        </div>
        <div className="mt-5 flex items-center gap-3 sm:mt-7">
          {!!category && (
            <button
              onClick={handleBack}
              className="rounded-[4px] border-2 border-[#008FD3]/60 px-5 py-2.5 font-medium text-[#008FD3] disabled:pointer-events-none disabled:opacity-60"
              disabled={currentStep === -1}
            >
              Back
            </button>
          )}
          <button
            onClick={handleContinue}
            className="rounded-[4px] border-2 border-[#008FD3] bg-[#008FD3] px-4 py-2.5 font-medium text-white disabled:pointer-events-none disabled:opacity-70"
            disabled={bookingMutation.isPending}
          >
            {bookingMutation.isPending ? "Submitting..." : "Continue"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookServiceForm;
