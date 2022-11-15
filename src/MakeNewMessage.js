import React, {useRef} from 'react';

const MakeNewMessage = ({email}) => {
  const colorRef = useRef('');
  const fontRef = useRef('');
  const messageRef = useRef('');
  const nameRef = useRef('');

  return (
    <div className="new-message">
      <h2>Make a new Colorberry Here!</h2>

    </div>
  )
}

export default MakeNewMessage;