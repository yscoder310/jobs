import { useInfiniteQuery } from "@tanstack/react-query";
import { API } from "../../../api";

async function getJobs({ q, pageParam = 0 }) {
  const response = await API.post("/getSampleJdJSON", {
    limit: 15,
    offset: pageParam * 15,
    jobRole:"backend"
  });

  return {
    data: {
      rows: response.data?.jdList,
      total_records: response.data?.totalCount,
    },
    nextPage: pageParam + 1,
  };
}

export const useGetJobs = ({ q }) => {
  return useInfiniteQuery({
    queryKey: ["use-get-jobs", { q, }],
    queryFn({ pageParam }) {
      return getJobs({ q, pageParam });
    },
    getNextPageParam(lastPage) {
        console.log(lastPage)
      if (lastPage.nextPage * 15 > lastPage.data.total_records) {
        return undefined;
      }
      return lastPage.nextPage;
    },
  });
};
