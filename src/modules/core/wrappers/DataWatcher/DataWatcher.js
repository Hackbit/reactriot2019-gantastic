import React from 'react';
import PropTypes from 'prop-types';

import { Database } from 'services';


class DataWatcher extends React.Component {
  resultRef = null;

  handleProgress = (snapshot) => {
    const { onResultProgress } = this.props;
    const value = snapshot.val() || {};
    onResultProgress(value);
    if (value.progress && value.progress >= 100) {
      this.resultRef.off();
      this.resultRef = null;
    }
  };

  componentDidUpdate(prevProps) {
    const { currentResultPath } = this.props;
    const { currentResultPath: prevResultPath } = prevProps;
    if (currentResultPath !== prevResultPath) {
      if (this.resultRef) {
        this.resultRef.off();
      }

      this.resultRef = Database.listenToRef(currentResultPath, this.handleProgress);
    }
  }

  render() {
    const { children } = this.props;

    return children || null;
  }
}

DataWatcher.propTypes = {
  children: PropTypes.node,
  currentProgress: PropTypes.number,
  currentResultPath: PropTypes.string,
  onResultProgress: PropTypes.func.isRequired,
};

DataWatcher.defaultProps = {
  children: undefined,
  currentProgress: 0,
  currentResultPath: undefined,
};


export default DataWatcher;
