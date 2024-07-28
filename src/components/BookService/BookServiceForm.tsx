import { TCategory } from "@/interfaces/categories";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { toast } from "sonner";
import BookServiceStep from "./BookServiceStep";

type BookServiceFormProps = {
  categories: TCategory[];
  defaultCategory: TCategory | undefined;
};

type FormData = {
  question: string;
  answer: string;
};

const BookServiceForm: React.FC<BookServiceFormProps> = ({
  categories,
  defaultCategory,
}) => {
  const [category, setCategory] = useState<TCategory | undefined>(
    defaultCategory,
  );
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isLastStep, setIsLastStep] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData[]>([]);
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

  const handleContinue = () => {
    if (!category) {
      return toast.error("Please select a category");
    }

    if (!formData[currentStep]?.answer) {
      return toast.error("Please provide the required information");
    }

    if (!isLastStep) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Form Data", formData);
    }
  };

  const handleBack = () => {
    if (currentStep === 0) {
      return setCategory(undefined);
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
                className="min-h-14 w-full cursor-pointer rounded-[4px] border p-2.5 hover:border-gray-700 focus:outline-none"
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
            className="rounded-[4px] border-2 border-[#008FD3] bg-[#008FD3] px-4 py-2.5 font-medium text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookServiceForm;
