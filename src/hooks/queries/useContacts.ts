import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../constants/api";
import linksService from "../../services/linksService";

export const useContacts = () =>
  useQuery({
    queryKey: [queryKeys.Links],
    queryFn: () => linksService.getAll(),
    select: ({ data }) => data,
  });
