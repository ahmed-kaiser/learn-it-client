import { useState } from "react";
import { createContext } from "react";

export const DarkModeContext = createContext();

const LightModeContext = ({ children }) => {
    const [lightState, setLightState] = useState(true);

    const handleLightState = () => {
        setLightState(!lightState);
    }

    return (
        <DarkModeContext.Provider value={{lightState, handleLightState}}>
            { children }
        </DarkModeContext.Provider>
    );
};

export default LightModeContext;