import { useLocation } from "react-router-dom";

export const useQuery = () => {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { q = "" } = Object.fromEntries(searchParams.entries());

  return {q}
}
