import { TCategory } from "@/interfaces/categories";
import React, { useState } from "react";
import BookServiceStep from "./BookServiceStep";

type BookServiceFormProps = {
  category: TCategory;
};

type FormData = string[];

const BookServiceForm: React.FC<BookServiceFormProps> = ({ category }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>([]);
  const steps = category.steps;

  const handleFormDataChange = (value: string) => {
    setFormData((prev) => {
      const newFormData = [...prev];
      newFormData[currentStep] = value;
      return newFormData;
    });
  };

  const handleContinue = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container">
        <div className="grid max-w-[640px] grid-cols-1 space-y-20">
          {steps.map((step, index) => (
            <BookServiceStep
              key={index}
              step={step}
              index={index}
              currentStep={currentStep}
              value={formData[currentStep]}
              handleFormDataChange={handleFormDataChange}
            />
          ))}
        </div>
        <div className="mt-5 flex items-center gap-3 sm:mt-7">
          <button
            onClick={handleBack}
            className="rounded-[4px] border-2 border-[#008FD3]/60 px-5 py-2.5 font-medium text-[#008FD3] disabled:pointer-events-none disabled:opacity-60"
            disabled={currentStep === 0}
          >
            Back
          </button>
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
