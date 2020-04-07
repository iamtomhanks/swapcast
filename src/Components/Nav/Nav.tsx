// Modules
import React from 'react';
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux';

// Styles
import './Nav.scss';

// Interfaces
import { AppState } from 'Interfaces/redux';

// Hooks
import { useModal } from 'Hooks/useModal';
 
// Components
import { Modal } from 'Components/Generic/Modal';
import { SignInForm } from 'Components/Forms/SignInForm';
import { NavBtn } from './NavBtn';

interface Props {
}

const Nav = (props: Props) => {
  const { modal: authModal, setModal: setAuthModal } = useModal();

  const toggleAuthModal = (visible: boolean) => {
    setAuthModal({ ...authModal, visible });
  };

  return (
    <div className='nav-component'> 
      <Modal
        headerText='Sign In'
        visible={authModal.visible}
        close={() => toggleAuthModal(false)}
      >
        <SignInForm />
      </Modal>
      <div className='user-btns'>
        <NavBtn text='Sign In' onClick={() => toggleAuthModal(true)} />
      </div>
    </div>
  );
};

const MapStateToProps = (state: AppState) => {
  return {
  };
};

const MapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators({
  }, dispatch),
});

const ConnectedNav = connect(MapStateToProps, MapDispatchToProps)(Nav);

export {
  ConnectedNav as Nav,
};