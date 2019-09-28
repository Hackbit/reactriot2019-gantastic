import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { constants } from 'modules/router';

import { Nav, PageLayout } from 'modules/core/components';


const History = (props) => {
  const {
    historyById,
    historyIds,
    historyIsFetching,
    onGetHistory,
  } = props;

  useEffect(() => {
    onGetHistory();
  });

  return (
    <React.Fragment>
      <PageLayout>
        History page
      </PageLayout>

      <Nav
        items={constants.authRoutes}
        selectedItem={constants.authRoutes[1].name}
      />
    </React.Fragment>
  );
};

History.propTypes = {
  historyById: PropTypes.shape().isRequired,
  historyIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  historyIsFetching: PropTypes.bool.isRequired,
  onGetHistory: PropTypes.func.isRequired,
};


export default History;
