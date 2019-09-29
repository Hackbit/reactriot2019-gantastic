import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-rainbow-components';


const ResultModal = (props) => {
  const { isOpen, onClose, resultImageUrl } = props;

  return (
    <Modal id="modal-1" isOpen={isOpen} onRequestClose={onClose}>
      {!!resultImageUrl && (
        <img
          src={resultImageUrl}
          className="rainbow-p-around_xx-large rainbow-m_auto rainbow-align-content_center"
          alt="Generated result"
          style={{ maxWidth: '80vw' }}
        />
      )}
    </Modal>
  );
};

ResultModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  resultImageUrl: PropTypes.string,
};


export default ResultModal;
