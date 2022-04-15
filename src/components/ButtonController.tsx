import { Button } from "@mantine/core";
import { IconUpload, IconClick } from "@tabler/icons";

type ButtonControllerType = {
  control: string;
};

function ButtonController({ control }: ButtonControllerType) {
  switch (control) {
    case "modify":
      return <Button leftIcon={<IconClick />}>新增第三行</Button>;
    default:
      return (
        <Button type="submit" leftIcon={<IconUpload />}>
          上傳
        </Button>
      );
  }
}

export default ButtonController;
