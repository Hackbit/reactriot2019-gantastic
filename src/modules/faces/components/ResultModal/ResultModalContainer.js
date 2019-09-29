import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { actions, selectors } from 'modules/faces';

import ResultModal from './ResultModal';


const mapStateToProps = createStructuredSelector({
  isOpen: selectors.getModalIsOpen,
  resultImageUrl: selectors.getResultImageUrl,
});

const mapDispatchToProps = {
  onClose: actions.facesModalClose,
};


export default connect(mapStateToProps, mapDispatchToProps)(ResultModal);
