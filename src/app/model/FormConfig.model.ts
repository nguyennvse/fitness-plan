export type FormConfigType = {
  title: string;
  control: string;
  type: string;
  class: string;
  index: number;
  chipList?: string[];
  optionList?: RadioOptionType[];
  checkboxOptions?: string[];
};

type RadioOptionType = {
  label: string;
  value: any;
};
