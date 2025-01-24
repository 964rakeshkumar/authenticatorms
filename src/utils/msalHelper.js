import { msalInstance, loginRequest } from "./authConfig";

export const handleClick = () => {

    const callHandleClick = async () => {
        try {
            if (msalInstance && msalInstance !== undefined) {
                console.log('msalInstance is initialized');
                await msalInstance.initialize(); // Ensure msalInstance is initialized
                await msalInstance.handleRedirectPromise();
                await msalInstance.loginRedirect(loginRequest);
                window.location.href = '/dashboard';
            } else {
                throw new Error('msalInstance is not initialized');
            }
        } catch (e) {
            throw new Error(e);
        }
    }

    callHandleClick();
};