/* eslint-disable react/button-has-type */
import React from 'react';

const Rock = ({ value, onCLick }) => {
	return (
			<button onCLick={onCLick} value="value">Rock</button>
	);
};

export default Rock;