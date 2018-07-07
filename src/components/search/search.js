import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Search extends Component {
  setFilter = (e) => {
    const {history, location: {pathname}} = this.props;
    history.push({
      pathname,
      search: `?${e.target.value}`,
    });
  }

  render = () =>
    <div className="search">
      <form>
        <div className="form-group">
          <div className="input-group container-flex">
            <div className="input-group-addon">
              <i className="fontello-icon">&#xe800;</i>
            </div>
            <input type="text"
              className="form-control"
              placeholder="Search by me"
              value={this.props.searchValue}
              onChange={this.setFilter}/>
          </div>
        </div>
      </form>
    </div>
}

export default withRouter(Search);
