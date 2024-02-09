import { useEffect } from "react";

export function useClickOutside({
  ref,
  onClickOutside,
}: {
  ref: React.RefObject<HTMLElement>;
  onClickOutside: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      onClickOutside(false);
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
}
