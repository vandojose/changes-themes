import React from "react";

import { Button } from "./styles";

export default function Toggle({ theme, toggleTheme }) {
  return <Button onClick={toggleTheme}>Trocar</Button>;
}
