import useCustomFormik from "./CustomFormik";
import { ControlledProps } from "src/typings";
import { useMantineTheme } from "@mantine/core";
import { Dropzone, DropzoneProps } from "@mantine/dropzone";
import fileDropzoneChildren from "./Helpers/FileDropZoneTools";
import removeDuplicateFiles from "./Helpers/removeDuplicateFiles";

const TXT_MIME_TYPE = ["text/plain"];

type UploadFile = {
  uploadFile: File[];
};

function FileDropZone(props: ControlledProps & DropzoneProps & UploadFile) {
  const theme = useMantineTheme();
  const { label, name, uploadFile, ...rest } = props;
  const [formik, hasError] = useCustomFormik(name);

  const handleOnDrop = (acceptedFiles: File[]) => {
    if (!acceptedFiles.length) {
      return;
    }

    const filteredAcceptedFiles = removeDuplicateFiles(
      acceptedFiles,
      uploadFile
    );

    return formik.setFieldValue(name, [
      ...uploadFile,
      ...filteredAcceptedFiles,
    ]);
  };

  return (
    <Dropzone
      onReject={(files) => console.log("rejected files", files)}
      maxSize={3 * 1024 ** 2}
      accept={TXT_MIME_TYPE}
      {...rest}
      onDrop={handleOnDrop}
    >
      {(status) => {
        return fileDropzoneChildren(status, theme);
      }}
    </Dropzone>
  );
}

export default FileDropZone;
