import React from "react";
export default async function request(url, method) {
  return await fetch(url, { method })
    .then((response) => response.json())
    .then((data) => data);
}

export const SwitchMode = React.createContext();
