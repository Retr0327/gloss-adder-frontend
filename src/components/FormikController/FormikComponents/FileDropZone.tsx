import { ControlledProps } from "types";
import useCustomFormik from "./CustomFormik";
import { useMantineTheme } from "@mantine/core";
import { Dropzone, DropzoneProps } from "@mantine/dropzone";
import { fileDropzoneChildren, removeDuplicateFiles } from "./Helpers/index";

const TXT_MIME_TYPE = ["text/plain"];

type UploadFile = {
  uploadedFile: File[];
};

function FileDropZone(props: ControlledProps & DropzoneProps & UploadFile) {
  const theme = useMantineTheme();
  const { label, name, uploadedFile, ...rest } = props;
  const [formik, hasError] = useCustomFormik(name);

  const handleOnDrop = (acceptedFiles: File[]) => {
    if (!acceptedFiles.length) {
      return;
    }

    const filteredAcceptedFiles = removeDuplicateFiles(
      acceptedFiles,
      uploadedFile
    );

    return formik.setFieldValue(name, [
      ...uploadedFile,
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
        return fileDropzoneChildren(status, theme, hasError);
      }}
    </Dropzone>
  );
}

export default FileDropZone;
