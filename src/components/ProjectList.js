import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectList(props) {
  const { projects } = props;
  const projectColumn = [];
  const columns = 3;
  const lengthArr = Math.round(projects.length / columns);
  for (let itemColumn = 0; itemColumn < columns; itemColumn += 1) {
    projectColumn.push(projects.slice(lengthArr * itemColumn, lengthArr * (itemColumn + 1)));
  }

  return (
    <div className="project-list">
      {projectColumn.map((column, i) => <div key={i} className="column">
        {column.map((item, j) => <img key={j} src={item.img} />)}
      </div>)}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
};
