import { type FC } from "react";

import { Table, type TableProps } from "antd";

interface ICustomTableProps extends TableProps {}

const CustomTable: FC<ICustomTableProps> = (props) => {
  return (
    <Table
      size="small"
      scroll={{ x: true }}
      pagination={{ pageSize: 10 }}
      showSorterTooltip={false}
      bordered
      {...props}
    />
  );
};

export default CustomTable;
