import React, { useState, useEffect } from 'react';
import { Treebeard, decorators } from 'react-treebeard';
import TreedefaultProps from './tree-theme';


Treebeard.defaultProps = TreedefaultProps;

// Define a custom header outside the component to avoid re-definitions on each render
const customDecorators = { ...decorators };
customDecorators.Header = ({ node, onFileSelect }) => {
    const fileLinkStyle = {
        color: '#007bff', // Bootstrap-like blue link color
        cursor: 'pointer',
        textDecoration: 'underline',
        marginLeft: '10px',
    };

    return (
        <div>
            {node.children ? (
                node.name
            ) : (
                // Making the file name itself clickable
                <span onClick={() => onFileSelect(node.name)} style={fileLinkStyle}>
                    {node.name}
                </span>
            )}
        </div>
    );
};



function TreeDocComponent({ onFileSelect }) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:8080/api/get_docs');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const onToggle = (node, toggled) => {
        if (data.cursor) {
            data.cursor.active = false;
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        setData({ ...data, cursor: node });
    };

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return <p>No data found.</p>;

    return <Treebeard 
    
        data={data} 
        onToggle={onToggle} 
        decorators={{
          ...customDecorators,
          Header: (props) => customDecorators.Header({ ...props, onFileSelect }, ),
        }}
       //style={treeStyle}
    />;
}

export default TreeDocComponent;
