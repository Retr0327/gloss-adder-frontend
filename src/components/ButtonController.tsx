import { Button } from "@mantine/core";
import { useRouter } from "next/router";
import { downloadFile } from "src/services";
import saveFiles from "@containers/Helpers/saveFiles";
import { IconUpload, IconDownload } from "@tabler/icons";

type ButtonControllerType = {
  control: string;
};

function ButtonController({ control }: ButtonControllerType) {
  const router = useRouter();

  const onModifyGlossClick = async () => {
    const { token, firstFileName } = router.query;
    const [result, error] = await downloadFile(token);

    if (error) {
      return alert("Oops! Something went wrong!");
    }

    saveFiles(result, firstFileName);
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
