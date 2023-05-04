import React, { FC, ReactNode, useContext } from 'react';
import { Users } from '../interfaces';
import { AppContext } from './DragContext';
import { ContextType } from '../interfaces';

type Props = {
    items: Users[];
    onChange: (items: Users[] ) => void;
    children?: ReactNode | undefined;
}

const DragArea: FC<Props> = ({ items, onChange, children }) => {

    const { dragIndex, dropIndex } = useContext<ContextType>(AppContext);

    const dragOverHandler = (event: React.DragEvent) => {
        event.preventDefault();
    }
    
    const dropHandler = () => {     
        let _items = [...items];
        if(dragIndex !== undefined) {
            const draggedItem = _items.splice(dragIndex, 1)[0];
            if(dropIndex !== undefined) {
                _items.splice(dropIndex, 0, draggedItem);
            }
            onChange(_items);
        }
    }

    return (
        <div onDragOver={(event) => dragOverHandler(event)} onDrop={dropHandler} >
            {children}
        </div>
    );
};

export default DragArea;