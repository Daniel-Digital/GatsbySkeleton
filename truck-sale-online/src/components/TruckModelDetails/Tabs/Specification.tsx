import React from 'react';
import styled from '@/styled';
import Row from '../Row';
import { useTruckModelData } from '@/contexts/TruckModelDataContext';
import { NOT_IN_WEBSITE } from '../constants';

const Container = styled.div`
  table {
    width: 100%;
  }
  td {
    padding-left: 65px;
    padding-right: 65px;
    padding-top: 14px;
    padding-bottom: 14px;
  }
  td {
    border-top: 1px solid #dee2e6;
  }
  tr:nth-of-type(1) {
    td {
      border-top: 0;
    }
  }
`;

const toExclude = ['id', 'model', 'image'];

const Specification = () => {
  const data = useTruckModelData();

  const rows = Object.keys(data.strapiTruck).filter(
    (key) => !toExclude.includes(key),
  );

  return (
    <Container>
      <table>
        <tbody>
          {rows.map((row, index) =>
            data.strapiTruck[row] && data.strapiTruck[row] != NOT_IN_WEBSITE ? (
              <Row
                prop={unCamelCase(row)}
                value={data.strapiTruck[row]}
                key={index}
              />
            ) : null,
          )}
        </tbody>
      </table>
    </Container>
  );
};

function unCamelCase(str: string): string {
  return (
    str
      // insert a space between lower & upper
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
      // uppercase the first character
      .replace(/^./, function (str) {
        return str.toUpperCase();
      })
  );
}
export default Specification;
