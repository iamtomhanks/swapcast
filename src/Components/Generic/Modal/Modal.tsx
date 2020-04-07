// Modules
import React, { ReactNode } from 'react';
import { Spring } from 'react-spring/renderprops';

// Styles
import './Modal.scss';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type Props = {
  headerText: string;
  children: ReactNode;
  close?(): void;
  visible: boolean;
};

const Modal = (props: Props) => {
  const { headerText, children, close, visible } = props;
  if (!visible) return null;

  return (
    <div className='modal-component'>
      <Spring
        from={{ opacity: 0, marginTop: '-100%' }}
        to={{ opacity: 1, marginTop: '0' }}
      >
        {({ opacity, marginTop }) => (
          <div
            className='modal'
            style={{
              opacity,
              marginTop,
            }}
          >
            <div className='modal-header'>
              { headerText }
              <button type='button' className='modal-x' onClick={close}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className='modal-body'>
              {children}
            </div>
          </div>
        )}
      </Spring>
    </div>
  );
};

export {
  Modal,
};