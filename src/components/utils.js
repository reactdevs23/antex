export const handleKeyDown = (event) => {
  if (
    !(
      /[0-9.]/.test(event.key) ||
      event.key === "Backspace" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown"
    )
  ) {
    event.preventDefault();
  }
};
