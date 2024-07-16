// src/components/DraggableField.js
import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableField = ({label }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'FIELD',
        item: { label },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className={`${isDragging ? 'opacity-80' : 'opacity-100'} w-24 text-center cursor-move p-2 mb-2 bg-blue-300`}>
            {label}
        </div>
    );
};

export default DraggableField;
