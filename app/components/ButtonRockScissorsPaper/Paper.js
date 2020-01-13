/* eslint-disable react/button-has-type */
import React from 'react';

const Paper = ({ value, onCLick }) => {
	return (
			<button onCLick={onCLick} value="value">Paper</button>
	);
};

export default Paper;