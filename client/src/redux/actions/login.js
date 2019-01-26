import { wrapRequest } from '../../utils/api';
import { domen, apiRoutes } from '../../config/apiRoutes';

export const facebookAuth = facebookResponse => async dispatch => {
  const tokenBlob = new Blob(
    [
      JSON.stringify(
        {
          access_token: facebookResponse.accessToken,
        },
        null,
        2,
      ),
    ],
    { type: 'application/json' },
  );

  const registerUser = await wrapRequest({
    method: 'POST',
    url: `${domen}${apiRoutes.facebookAuth}`,
    mode: 'cors',
    cache: 'default',
    data: tokenBlob,
  });

  console.log(registerUser);
};
