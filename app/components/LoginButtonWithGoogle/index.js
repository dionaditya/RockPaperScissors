/* eslint-disable react/button-has-type */
/**
 *
 * LoginButtonWithGoogle
 *
 */

import React from 'react';

function LoginButtonWithGoogle({handleClick}) {
  return (
    <div>
      <button onClick={handleClick}>Login with Google</button>
    </div>
  );
}

LoginButtonWithGoogle.propTypes = {};

export default LoginButtonWithGoogle;
