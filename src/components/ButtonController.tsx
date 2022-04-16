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

  const onDownloadClick = async () => {
    const { token, firstFileName } = router.query;
    const [result, error] = await downloadFile(token);

    if (error) {
      return alert("Oops! Something went wrong!");
    }

    saveFiles(result, firstFileName);

    router.push(router.pathname);
  };

  switch (control) {
    case "download":
      return (
        <Button leftIcon={<IconDownload />} onClick={onDownloadClick}>
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
