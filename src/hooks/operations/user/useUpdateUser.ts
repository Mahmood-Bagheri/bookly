import apiService from "services/api/apiService";
import API_URLS from "constants/apiUrls";
import { useMutation } from "react-query";
import API_RESPONSE_MESSAGES from "constants/apiResponseMessages";
import * as notice from "helpers/notice";
import { RoleUnionType } from "components/UserBox";

export type ChangeUserRoleMutationVariables = {
    userId: string;
    role: RoleUnionType;
};

export const changeUserRole = ({
    userId,
    role,
}: ChangeUserRoleMutationVariables) => {
    return apiService.put(`${API_URLS.changeUserRole}/${userId}`, { role });
};

export const useChangeUserRole = () =>
    useMutation(changeUserRole, {
        onSuccess: () => {
            notice.success(API_RESPONSE_MESSAGES.user.changeRole.success);
        },
        onError: () => {
            notice.error(API_RESPONSE_MESSAGES.user.changeRole.error);
        },
    });
