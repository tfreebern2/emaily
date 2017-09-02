// SurveyField contains logic to rengder a single
// label and text input
import React from 'react';

export default ({ input }) => {
	return (
		<div>
			<input {...input} />
		</div>
	);
};
