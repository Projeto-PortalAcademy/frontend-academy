import React from 'react';

const IconButton = ({ texto, Icone, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px 16px',
        backgroundColor: '#f4f4f4',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#000',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.2s',
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e0e0e0')}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f4f4f4')}
    >
      {Icone && <Icone size={24} style={{ marginRight: '8px' }} />}
      {texto}
    </button>
  );
};

export default IconButton;
