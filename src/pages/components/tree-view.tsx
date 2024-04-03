import React, { useState, useEffect } from 'react';
import parse from 'html-react-parser';

function TreeViewComponent({ filePath }) {
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchFileContent = async () => {
            // Check if filePath starts with "public/documents" and remove it
            const adjustedFilePath = filePath.startsWith('public/documents/') ? filePath.substring('public/documents/'.length) : filePath;
            console.log(`Fetching content for: ${adjustedFilePath}`); // Log the adjusted path

            if (!adjustedFilePath) {
                setContent('');
                return;
            }

            try {
                const response = await fetch(`http://localhost:8080/api/get_file/${encodeURIComponent(adjustedFilePath)}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch file content: ${response.status}`);
                }
                const data = await response.text();
                setContent(data);
            } catch (error) {
                console.error("Error fetching file content:", error);
                setContent('Error loading file content.');
            }
        };

        fetchFileContent();
    }, [filePath]);

    return <div style={{ whiteSpace: 'pre-wrap' }}>{parse(content)}</div>;
}


export default TreeViewComponent;
