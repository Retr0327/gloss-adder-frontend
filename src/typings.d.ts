import { SelectProps } from "@mantine/core";
import { DISABLED, RESET } from "./constants";
import { DropzoneProps } from "@mantine/dropzone";

export type DropZoneState = {
  status: boolean;
  process: string;
};

type DropZoneAction = {
  type: typeof DISABLED;
  payload: string;
};

type ResetAction = {
  type: typeof RESET;
};

export type ActionType = DropZoneAction | ResetAction;

export type CredentialsType = {
  [key: string]: any;
};

export type CustomFetchType = {
  method: string;
  url: string;
  credentials?: CredentialsType;
  purpose?: string;
};

export type FormValueType = {
  fileUpload: FormData | [];
  cliticOption: string;
};

export interface SetFieldValuesProps<FormValueType> {
  setFieldValue<Field extends keyof FormValueType>(
    field: Field,
    value: FormValueType[Field],
    shouldValidate?: boolean
  ): void;
}

export type OptionType = {
  label: string;
  value: string;
  description: string;
};

export interface OptionsProps {
  options: OptionType[];
}

type ControlledProps = { label: string; name: string };

type ControllerProps = ControlledProps &
  (
    | ({ control: "drop-zone" } & Omit<DropzoneProps>)
    | ({ control: "select"; options: OptionType[] } & Omit<SelectProps, "data">)
  );
