import { DropzoneProps } from "@mantine/dropzone";

export type ValueType = {
  fileUpload: File[];
  cliticOption: string;
};

export interface SetFieldValuesProps<ValueType> {
  setFieldValue<Field extends keyof ValueType>(
    field: Field,
    value: ValueType[Field],
    shouldValidate?: boolean
  ): void;
}

type ControlledProps = { label: string; name: string };

type ControllerProps = ControlledProps &
  ({ control: "drop-zone" } & Omit<DropzoneProps>);
