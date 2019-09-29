import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { constants } from 'modules/router';

import { Nav, PageLayout, Title } from 'modules/core/components';


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
    <>
      <PageLayout>
        <Title>Your Generator History</Title>
      </PageLayout>

      <Nav
        items={constants.authRoutes}
        selectedItem="History"
      />
    </>
  );
};

History.propTypes = {
  historyById: PropTypes.shape().isRequired,
  historyIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  historyIsFetching: PropTypes.bool.isRequired,
  onGetHistory: PropTypes.func.isRequired,
};


export default History;
