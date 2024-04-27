import React from 'react';
import './style.css';

// Add inline styles on each individual button, corresponding to the action
export default function ButtonVariants() {
  return (
    <span className="wrapper">
      <button className="button-create" style={{ background: 'green' }}>
        Create
      </button>
      <button className="button-update" style={{ background: 'darkorange' }}>
        Update
      </button>
      <button className="button-delete" style={{ background: 'red' }}>
        Delete
      </button>
    </span>
  );
}

// Inline Styles
// Using inline styles, give the "Create" button a green background color and white text color.

// Give the "Update" button an orange (darkorange) background color and white text color.

// Give the "Delete" button a red background color, white text color, and font weight of bold.
