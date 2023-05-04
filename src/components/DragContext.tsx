import React, { FC, ReactNode, useState, createContext } from 'react';
import { ContextType } from '../interfaces';



export const AppContext = createContext<ContextType>(
    {
        dragIndex: undefined,
        setDragIndex: () => undefined,
        dropIndex: undefined, 
        setDropIndex: () => undefined
    }
);

type Props = {
    children?: ReactNode | undefined
}

const DragContext: FC<Props> = ({children}) => {

    const [dragIndex, setDragIndex] = useState<number | undefined>();
    const [dropIndex, setDropIndex] = useState<number | undefined>();
    
    return (
        <AppContext.Provider value={{dragIndex, setDragIndex, dropIndex, setDropIndex}}>
            {children}
        </AppContext.Provider>
    );
}

export default DragContext;