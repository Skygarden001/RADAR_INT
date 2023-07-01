import { useContext } from 'react';
import context from './context';


function Provider({children}) {
    const data = useContext(DataContext)

    return (  

        <context.Provider>
            {children}
        </context.Provider>

    );
}

export default Provider;