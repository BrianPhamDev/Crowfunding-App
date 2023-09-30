export default function classNames(...args) {
  return args
    .reduce((acc, currentValue) => {
      if (typeof currentValue === "string") {
        return acc.concat(currentValue.split(" "));
      }
      return acc.concat(Object.values(currentValue));
    }, [])
    .join(" ");
}
