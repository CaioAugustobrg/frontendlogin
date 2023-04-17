import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Modal ({isOpen})  {
	if (isOpen) {
		return( <div>modal</div>);
	}
	return null;
}