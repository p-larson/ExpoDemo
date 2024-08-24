class Api {
  static headers(app) {
    if (app) {
      return {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-App-Version": `${app.appVersion || ""}.${app.appBuildNumber || ""}`,
        "X-Device-Type": app.deviceType || "",
      };
    }
    return {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    };
  }

  static post(app, route, params) {
    return this.api_xhr(app, route, params, "POST");
  }

  static async api_xhr(app, route, params, verb) {
    const url = `${route}`;
    const paramsWithAuth = Object.assign(params || {}, app.apiAuth);
    if (app.accessToken) {
      paramsWithAuth.access_token = app.accessToken;
    }
    console.log("API", url);
    console.log("PARAMS", paramsWithAuth);
    const options = {
      method: verb,
      ...(paramsWithAuth ? { body: JSON.stringify(paramsWithAuth) } : null),
    };
    options.headers = Api.headers(app);

    return fetch(url, options).then((resp) => {
      const json = resp.json();
      if (resp.ok) {
        console.log("RESPONSE", json);
        return json;
      }
      return json.then((err) => {
        console.log("ERROR", err);
        throw err;
      });
    });
  }
}
export default Api;
