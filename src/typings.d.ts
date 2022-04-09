import { DropzoneProps } from "@mantine/dropzone";

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

type ControlledProps = { label: string; name: string };

type ControllerProps = ControlledProps &
  ({ control: "drop-zone" } & Omit<DropzoneProps>);
