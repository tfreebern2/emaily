// SurveyField contains logic to rengder a single
// label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			<label>
				{label}
			</label>
			<input {...input} />
			{touched && error}
		</div>
	);
};
