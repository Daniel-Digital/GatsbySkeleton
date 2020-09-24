import React from 'react';
import styled from '@/styled';
import Row from './Row';
import { css } from '@emotion/core';

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

type Props = {
  toExclude: string[];
  data: any;
};

const Specification: React.FC<Props> = ({ toExclude, data }) => {
  const rows = Object.keys(data).filter((key) => !toExclude.includes(key));

  return (
    <Container>
      <table>
        <tbody>
          {rows.map((row, index) =>
            data[row] && data[row] !== 'Not in website' ? (
              <Row prop={unCamelCase(row)} value={data[row]} key={index} />
            ) : null,
          )}
        </tbody>
      </table>
      <a
        css={css`
          display: block;
          margin-top: 20px;
          text-decoration: underline;
          text-align: right;
          transition: color 0.2;
          :hover {
            color: #999;
          }
        `}
        href={data.modelPdfCatalogueLink || data.pdfLink}
      >
        PDF catalogue link
      </a>
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
