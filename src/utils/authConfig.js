
import { PublicClientApplication } from "@azure/msal-browser";
export const msalConfig = {
    auth: {
        clientId: 'dfcfa90-f5d2-4550-be6f-36cc03759ff1', // Replace with your Azure AD app client ID
        authority: 'https://login.microsoftonline.com/dfcfa90-f5d2-4550-be6f-36cc03759ff1', // Replace with your Azure AD tenant ID
        redirectUri: 'http://localhost:3000', // Replace with your redirect URI
    },
};


// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"],
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
    graphMePhotoEndpoint:
        "https://graph.microsoft.com/v1.0/me/photos/48x48/$value",
};

export const msalInstance = new PublicClientApplication(msalConfig);

