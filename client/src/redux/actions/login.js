import { push } from "connected-react-router";
import { wrapRequest } from "../../utils/api";
import { domen, apiRoutes } from "../../config/apiRoutes";
import { nextStep } from "./stepper";
import omit from "lodash/omit";

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
    { type: "application/json" },
  );
  const registerUser = await wrapRequest({
    method: "POST",
    url: `${domen}${apiRoutes.facebookAuth}`,
    mode: "cors",
    cache: "default",
    data: tokenBlob,
  });
  const { data } = registerUser;
  dispatch({
    type: "AUTH",
    payload: data,
  });
  dispatch(nextStep());
  dispatch(push(`report-problem/${data.id}`));
  localStorage.setItem("token", data.token);
  localStorage.setItem(
    "user",
    JSON.stringify(omit(data, ["token", "_id", "email"])),
  );
};
