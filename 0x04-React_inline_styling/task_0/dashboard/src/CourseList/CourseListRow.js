import React from "react";
import PropTypes from 'prop-types';

const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) => {
  const bgColorRow = {backgroundColor: '#f5f5f5ab'}
  const bgHeaderRow = {backgroundColor: '#deb5b545'}
  if (isHeader) {
    if (textSecondCell === null) {
      return (
        <tr style={bgColorRow}>
          <th style={bgHeaderRow} colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={bgColorRow}>
          <th style={bgHeaderRow}>{textFirstCell}</th>
          <th style={bgHeaderRow}>{textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={bgColorRow}>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};
export default CourseListRow;
