import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

const sortIcons = {
  asc: <span>&#xf15d;</span>,
  desc: <span>&#xf15e;</span>,
  default: <span>&#xf0dc;</span>,
};

const tableCloumns = {
  name: '',
  description: '',
  languages: 'hidden-xm',
  license: 'hidden-lg',
};

class TableHeader extends Component {
  sizeClass = (name) =>
    `th-small ${tableCloumns[name]} cell100`;

  changeDirection = (sortDirection) =>
    sortDirection === 'desc' ? 'asc' : 'desc';

  getSearchValue() {
    const {search} = this.props.location;
    return search ? search.replace('?', '') : '';
  }

  getPath = (name, sortDirection) => ({
    pathname: `/catalog/${name}/${this.changeDirection(sortDirection)}`,
    search: this.getSearchValue(),
  })

  render() {
    const {sortType, sortDirection} = this.props.match.params;

    return (
      <tr>
        {Object.keys(tableCloumns)
          .map((name) =>
            <th key={name} className={this.sizeClass(name)}>
              <Link to={this.getPath(name, sortDirection)}>
                {name}
                <span className="fontello-icon sort-icon">
                  {name === sortType ? sortIcons[sortDirection] : sortIcons.default}
                </span>
              </Link>
            </th>)}
      </tr>
    );
  }
}

export default withRouter(TableHeader);
