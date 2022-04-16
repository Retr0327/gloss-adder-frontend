import { RESET } from "src/constants";
import { Button } from "@mantine/core";
import { useRouter } from "next/router";
import { downloadFile } from "src/services";
import saveFiles from "@containers/Helpers/saveFiles";
import { IconUpload, IconDownload } from "@tabler/icons";
import { useDropZone } from "src/context/DropZoneContext";

function ButtonController() {
  const router = useRouter();
  const { dropZone, dispatch } = useDropZone();

  const onDownloadClick = async () => {
    const { token, firstFileName } = router.query;
    const [result, error] = await downloadFile(token);

    if (error) {
      return alert("Oops! Something went wrong!");
    }

    saveFiles(result, firstFileName);

    router.push(router.pathname);
    dispatch({ type: RESET });
  };

  switch (dropZone.process) {
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
