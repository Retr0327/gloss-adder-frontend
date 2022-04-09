import { Group, Text, Select as MantineSelect } from "@mantine/core";
import { forwardRef } from "react";

const data = [
  {
    image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
    label: "Homer Simpson",
    value: "Homer Simpson",
    description: "Overweight, lazy, and often ignorant",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",
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

function Select() {
  return (
    <MantineSelect
      label="Choose employee of the month"
      placeholder="Pick one"
      itemComponent={SelectItem}
      data={data}
      clearable
      maxDropdownHeight={400}
      nothingFound="Nobody here"
    />
  );
}

export default Select;
