import { useState } from "react";

export default function useToggleValue(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const handleToggle = () => {
    setValue((value) => !value);
  };
  return { value, handleToggle };
}
