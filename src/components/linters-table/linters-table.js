import React, {Component} from 'react';

import {connect} from 'react-redux';
import {fetchLinters} from '../../redux/actions';

import TableHeader from '../table-header/table-header';
import Search from '../search/search';
import {LintersList} from '../linters-list/linters-list';

class LintersTable extends Component {
  componentDidMount() {
    this.props.fetchLinters();
  }

  filterLinters = (linters, searchValue) =>
    linters.filter((linter) =>
      linter.description && linter.description.includes(searchValue) ||
      linter.languages && linter.languages.includes(searchValue) ||
      linter.license && linter.license.includes(searchValue) ||
      linter.name && linter.name.includes(searchValue));

  sortLinters = (linters, sortType, sortDirection) =>
    linters.sort((a, b) => {
      if (a[sortType] < b[sortType]) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (a[sortType] > b[sortType]) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });

  getLintersList = (searchValue) => {
    const {linters, match: {params: {sortType, sortDirection}}} = this.props;

    const filteredLinters = this.filterLinters(linters, searchValue);
    const sortedLinters = this.sortLinters(filteredLinters, sortType, sortDirection);

    return sortedLinters;
  }

  getSearchValue() {
    const {search} = this.props.location;
    return search ? search.replace('?', '') : '';
  }

  render() {
    const searchValue = this.getSearchValue();
    const linters = this.getLintersList(searchValue);

    return (
      <div className="tab-content">
        <Search searchValue={searchValue}/>
        <div className="package-table m-b-110">
          <table className="table table-bordered table-striped">
            <thead className="package-table-head">
              <TableHeader/>
            </thead>
            <tbody className="package-table-body">
              <LintersList linters={linters}/>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  linters: state.linters,
});

const mapDispatchToProps = (dispatch) => ({
  fetchLinters: () => dispatch(fetchLinters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LintersTable);

