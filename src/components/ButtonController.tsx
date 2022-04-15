import { Button } from "@mantine/core";
import { useRouter } from "next/router";
import { IconUpload, IconDownload } from "@tabler/icons";

type ButtonControllerType = {
  control: string;
};

function ButtonController({ control }: ButtonControllerType) {
  const router = useRouter();

  const onModifyGlossClick = async () => {
    const { token } = router.query;
    console.log(token);
  };

  switch (control) {
    case "download":
      return (
        <Button leftIcon={<IconDownload />} onClick={onModifyGlossClick}>
          下載
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
