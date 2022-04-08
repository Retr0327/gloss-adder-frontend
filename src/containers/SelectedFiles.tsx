import React from "react";
import { useFormikContext } from "formik";
import { IconFileText } from "@tabler/icons";
import { Table, Button } from "@mantine/core";

interface SelectedFilesProps {
  files: FormData | null;
}

interface FileProps {
  path: string;
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

function SelectedFiles(props: SelectedFilesProps) {
  const { files } = props;
  const { setFieldValue } = useFormikContext();

  let fileRows = null;

  if (files) {
    const filesArray = Object.values(files);

    const handleOnClick = (fileName: string) => () => {
      const filteredFilesArray = filesArray.filter(
        (value) => value.name !== fileName
      );

      setFieldValue("fileUpload", filteredFilesArray);
    };

    fileRows = filesArray.map((value: FileProps) => (
      <tr key={value.name}>
        <td width="30%">{value.name}</td>
        <td width="20%">
          <IconFileText width={20} />
          txt
        </td>
        <td width="20%">{value.size}</td>
        <td width="20%">
          <Button color="red" onClick={handleOnClick(value.name)}>
            刪除
          </Button>
        </td>
      </tr>
    ));
  }

  return (
    <Table
      verticalSpacing="md"
      horizontalSpacing="sm"
      fontSize="lg"
      width="100%"
    >
      <thead>
        <tr>
          <th>檔案名稱</th>
          <th>副檔名</th>
          <th>大小</th>
          <th>刪除</th>
        </tr>
      </thead>
      {fileRows && <tbody>{fileRows}</tbody>}
    </Table>
  );
}

export default SelectedFiles;
