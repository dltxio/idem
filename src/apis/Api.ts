import HTTPClient from "./HTTPClient";

export default class Api extends HTTPClient {
  public verifyEmail = async (token: string) =>
    this.post<boolean>(`user/verify-email`, { token: token });
}
