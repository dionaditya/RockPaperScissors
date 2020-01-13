/* eslint-disable react/button-has-type */
import React from 'react';

const Scissors = ({ value, onCLick }) => {
	return (
			<button onCLick={onCLick} value="value">Scissors</button>
	);
};

export default Scissors;