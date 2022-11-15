import React, {useState, useEffect, useRef} from 'react';

const EmailForm = ({handleEmailSubmit}) => {
  const emailRef = useRef('');

  return (
    <form onSubmit={handleEmailSubmit(emailRef.current.value)}>
        <label>
        <input type="email" ref={emailRef}  placeholder="Your e-mail address ..." required/>
      </label>
      <button type="submit">Submit</button>
      </form>
  )
}
export default EmailForm;