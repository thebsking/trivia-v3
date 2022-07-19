import React from 'react';
import { Modal, Box } from '@mui/material';

function BasicModal(props) {

  return (
    <Modal
      open={props.open}
      onClose={props.close}
    >
      <Box className='form-modal'>
        {props.content}
      </Box>
    </Modal>
  )
}

export default BasicModal;