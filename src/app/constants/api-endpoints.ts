import { environment } from '../../environments/environment'

const baseUrl = environment.apiBaseUrl;

export const ApiEndpoints = {
    users: {
        create: `${baseUrl}/User/Create`,
        login: `${baseUrl}/User/login`,
        update: `${baseUrl}/User/Update`,
        delete: `${baseUrl}/User/Delete`,
        getById: `${baseUrl}/User/GetById`,
        getAll: `${baseUrl}/User/GetAll`,
        changePassword: `${baseUrl}/User/ChangePassword`,
    }
}