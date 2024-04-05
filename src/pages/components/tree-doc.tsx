import { useState, useEffect } from 'react';
import { Treebeard, decorators } from 'react-treebeard';
import TreedefaultProps from './tree-theme';
import { HTTP_URL } from '../../config/constant';


Treebeard.defaultProps = TreedefaultProps;

// Define a custom header outside the component to avoid re-definitions on each render
const customDecorators = { ...decorators };
customDecorators.Header = ({ node, onFileSelect }:any) => {
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

type Props = {
    onFileSelect:(arg:string) =>void
}



function TreeDocComponent({ onFileSelect }:Props) {
    const [data, setData] = useState<any|null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string|null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${HTTP_URL}/get_docs`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);
            } catch (error:any) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const onToggle = (node:any, toggled:any) => {
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
          Header: (props:any) => customDecorators.Header({ ...props, onFileSelect }, ),
        }}
       //style={treeStyle}
    />;
}

export default TreeDocComponent;
