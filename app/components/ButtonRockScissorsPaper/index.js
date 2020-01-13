/* eslint-disable react/button-has-type */
/**
 *
 * ButtonRockScissorPaper
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button } from 'antd';

export const Paper = ({ handleClick, disabled }) => {
  if(disabled) {
   return (
    <Button onClick={handleClick} value="paper" disabled>
      Paper
    </Button>
  );
  }
  return (
    <Button onClick={handleClick} value="paper">
      Paper
    </Button>
  );
};

export const Rock = ({ handleClick, disabled }) => {
   if(disabled) {
   return (
    <Button onClick={handleClick} value="rock" disabled>
      Rock
    </Button>
  );
  }
  return (
    <Button onClick={handleClick} value="rock">
      Rock
    </Button>
  );
};

export const Scissors = ({ handleClick,disabled }) => {
  if(disabled) {
    return (
    <Button onClick={handleClick} value="scissors" disabled>
      Scissors
    </Button>
  );
  }
  return (
    <Button onClick={handleClick} value="scissors">
      Scissors
    </Button>
  );
};
