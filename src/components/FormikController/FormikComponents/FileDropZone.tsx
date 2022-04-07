import useCustomFormik from "./CustomFormik";
import { useMantineTheme } from "@mantine/core";
import { Dropzone, DropzoneProps } from "@mantine/dropzone";
import FileDropzoneChildren from "./Helpers/FileDropZoneTools";
import { ControlledProps } from "src/typings";

const TXT_MIME_TYPE = ["text/plain"];

function FileDropZone(props: ControlledProps) {
  const theme = useMantineTheme();
  const { label, name, ...rest } = props;
  const [formik, hasError] = useCustomFormik(name);

  const handleOnDrop = (files: File[]) => {
    console.log("accepted files", files);
    formik.setFieldValue("fileUpload", files);
  };

  return (
    <Dropzone
      onReject={(files) => console.log("rejected files", files)}
      maxSize={3 * 1024 ** 2}
      accept={TXT_MIME_TYPE}
      onDrop={handleOnDrop}
    >
      {(status) => {
        return FileDropzoneChildren(status, theme);
      }}
    </Dropzone>
  );
}

export default FileDropZone;
