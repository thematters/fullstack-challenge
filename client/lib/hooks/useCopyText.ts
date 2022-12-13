import { useSnackbar } from "./useSnackbar";

export const useCopyText = (message: string = 'Copy Success!') => {
  const openSnackbar = useSnackbar()

  const handleClick = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => openSnackbar(message))
      .catch(() =>{ throw new Error('Unable to write to clipboard') })
  };

  return handleClick;
}