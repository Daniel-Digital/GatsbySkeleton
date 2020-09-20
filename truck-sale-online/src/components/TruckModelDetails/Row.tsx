import React from 'react';

type Props = {
  prop: string;
  value: string;
};

const Row: React.FC<Props> = ({ prop, value }) => {
  return (
    <tr>
      <td>{prop}</td>
      <td>{value}</td>
    </tr>
  );
};

export default Row;
