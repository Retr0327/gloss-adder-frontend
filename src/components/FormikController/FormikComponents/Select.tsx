import { forwardRef } from "react";
import {
  Group,
  Text,
  Select as MantineSelect,
  SelectProps,
} from "@mantine/core";
import useCustomFormik from "./CustomFormik";
import { IconChevronDown } from "@tabler/icons";
import { OptionsProps, ControlledProps } from "src/typings";

const data = [
  {
    label: "Homer Simpson",
    value: "Homer Simpson",
    description: "Overweight, lazy, and often ignorant",
  },
  {
    label: "Spongebob Squarepants",
    value: "Spongebob Squarepants",
    description: "Not just a sponge",
  },
];

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  label: string;
  description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

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
      data={data}
      placeholder={placeholder}
      itemComponent={SelectItem}
      {...rest}
      // data={options}
    />
  );
}

export default Select;
