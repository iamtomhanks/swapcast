// Modules
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux';

// Styles
import './Room.scss';

// Interfaces
import { Participant } from 'Interfaces/Participant';
import { AppState } from 'Interfaces/redux';

// Components
import { VideoStream } from 'Components/Generic/VideoStream';

interface Props extends RouteComponentProps {
  participants: Participant[];
}

const Room = ({ participants }: Props) => {
  return (
    <div className='room-component'> 
      <div className='meeting-info-container'>
        <VideoStream videoId='local' />
      </div>  

      <div className='participants-container'>
        {participants.map((participant: Participant) => {
          return (
            <VideoStream videoId={participant.id} key={participant.id} />
          );
        })}
      </div>
    </div>
  );
};

const MapStateToProps = (state: AppState) => {
  return {
    participants: state.room.participants,
  };
};

const MapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators({
  }, dispatch),
});

const ConnectedRoom = connect(MapStateToProps, MapDispatchToProps)(Room);

export {
  ConnectedRoom as Room,
};