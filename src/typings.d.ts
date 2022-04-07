export type ValueType = {
  fileUpload: FormData | null;
  cliticOption: string;
};

export interface SetFieldValuesProps<ValueType> {
  setFieldValue<Field extends keyof ValueType>(
    field: Field,
    value: ValueType[Field],
    shouldValidate?: boolean
  ): void;
}
