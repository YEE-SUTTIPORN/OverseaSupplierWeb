export interface WebListModel {
    Web_Image: string,
    Web_Name: string,
    Web_Group: string,
    Web_Url: string
}


export interface Website {
    id: number;
    name: string;
    ssoEnabled: boolean;
    ssoEndpoint: string;
    webDescription: string;
    ImageBase64: string;
}