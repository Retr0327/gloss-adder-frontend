import { SelectItem } from "./Helpers";
import { IconChevronDown } from "@tabler/icons";
import useCustomFormik from "@hooks/useCustomFormik";
import { OptionsProps, ControlledProps } from "types";
import { Select as MantineSelect, SelectProps } from "@mantine/core";

function Select(
  props: ControlledProps & OptionsProps & Omit<SelectProps, "data">
) {
  const { label, options, placeholder, name, ...rest } = props;
  const [formik, hasError] = useCustomFormik(name);
  const fieldValue = (formik.values as { [key: string]: any })[name];

  return (
    <MantineSelect
      rightSection={<IconChevronDown width={15} color="#9e9e9e" />}
      styles={{ rightSection: { pointerEvents: "none" } }}
      label={label}
      name={name}
      value={fieldValue}
      onChange={(value) => formik.setFieldValue(name, value)}
      onBlur={formik.handleBlur}
      allowDeselect
      error={hasError}
      clearable
      data={options}
      placeholder={placeholder}
      itemComponent={SelectItem}
      {...rest}
    />
  );
}

export default Select;
