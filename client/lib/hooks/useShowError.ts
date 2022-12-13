import { useSnackbar } from "./useSnackbar";

export const useShowError = () => {
  const [showError] = useSnackbar('error');

  return showError
}