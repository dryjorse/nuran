import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../constants/api";
import galleryService from "../../services/galleryService";

export const useGallery = () =>
  useQuery({
    queryKey: [queryKeys.Gallery],
    queryFn: () => galleryService.getAll(),
    select: ({ data }) => data,
  });
