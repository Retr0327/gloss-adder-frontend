import { Button } from "@mantine/core";
import { useRouter } from "next/router";
import { IconUpload, IconClick } from "@tabler/icons";

type ButtonControllerType = {
  control: string;
};

function ButtonController({ control }: ButtonControllerType) {
  const router = useRouter();

  const onModifyGlossClick = async () => {
    const { token, cliticOption } = router.query;
  };

  switch (control) {
    case "modify":
      return (
        <Button leftIcon={<IconClick />} onClick={onModifyGlossClick}>
          新增第三行
        </Button>
      );
    default:
      return (
        <Button type="submit" leftIcon={<IconUpload />}>
          上傳
        </Button>
      );
  }
}

export default ButtonController;
