import React, { createContext } from "react";
import Api from "../apis/Api";

export const ApiContext = createContext<Api>(null as unknown as Api);

export const ApiProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  console.log(process.env.VITE_APP_PROXY_URL);
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const api = new Api(process.env.VITE_APP_PROXY_URL! as string, true);

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};
