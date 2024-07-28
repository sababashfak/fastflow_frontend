export interface TStepOption {
  option_name: string;
  option_description?: string;
  substeps?: TStep;
}

export interface TStep {
  step_name: string;
  step_description?: string;
  step_type?: "radio" | "textarea" | "image";
  step_options?: TStepOption[];
  step_placeholder?: string;
}

export interface TCategory {
  cat_name: string;
  cat_icon?: string;
  cat_slug: string;
  steps: TStep;
}
