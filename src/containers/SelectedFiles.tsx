import React from "react";
import { IconFileText } from "@tabler/icons";
import { Table, Button } from "@mantine/core";

type SelectedFilesProps = {
  files: FormData | null;
};

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

  let fileRows = null;

  if (files) {
    const filesArray = Object.values(files);

    fileRows = filesArray.map((value: FileProps) => (
      <tr key={value.name}>
        <td width="30%">{value.name}</td>
        <td width="20%">
          <IconFileText width={20} />
          txt
        </td>
        <td width="20%">{value.size}</td>
        <td width="20%">clitics</td>
        <td width="20%">
          <Button color="red">刪除</Button>
        </td>
      </tr>
    ));
  }

  return (
    <Table verticalSpacing="md" horizontalSpacing="sm" fontSize="lg">
      <thead>
        <tr>
          <th>檔案名稱</th>
          <th>副檔名</th>
          <th>大小</th>
          <th>clitics 選項</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody>{fileRows}</tbody>
    </Table>
  );
}

export default SelectedFiles;
