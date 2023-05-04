import React, { FC, ReactNode, useContext } from 'react';
import { AppContext } from './DragContext';
import { ContextType } from '../interfaces';

type Props = {
    index: number;
    children?: ReactNode | undefined
}

const DragItem: FC<Props> = ({index, children}) => {
    
    const { setDragIndex, setDropIndex } = useContext<ContextType>(AppContext);

    
    const dragStartHandler = () => {
        setDragIndex(index);
    }

    const dragEnterHandler = () => {
        setDropIndex(index);
    }

    return (
        <div draggable onDragStart={dragStartHandler} onDragEnter={dragEnterHandler} >
            {children}
        </div>
    );
};

export default DragItem;