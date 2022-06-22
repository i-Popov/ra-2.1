import React from 'react';
import PropTypes from 'prop-types';

export default function Toolbar(props) {
  const { filters, selected } = props;
  const onSelectFilter = (e) => {
    props.onSelectFilter(e.target.innerText);
  };

  return (
    <div className="filter">
      {filters.map((filter, i) => {
        return <div key={i} onClick={onSelectFilter} className={filter === selected ? "active" : ""}>{filter}</div>
      })}
    </div>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
};
