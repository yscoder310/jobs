import { useEffect } from "react";
import { useGetJobs } from "./api";
import JobsListing from "./components/JobsListing";
import useInView from "../../hooks/useInView";
import { composeJobsData } from "./utils/helpers";
import JobFilters from "./components/JobFilters";

const JOB_FILTERS = {
  limit: "",
};

const Jobs = () => {
  const [targetRef, isVisible] = useInView();
  const { data: JobsData, fetchNextPage } = useGetJobs({ q: "" });
  // console.log(JobsData?.pages[0]?.data?.rows)

  useEffect(() => {
    if (isVisible) {
        console.log("iS IN VIEW")
      fetchNextPage();
    }
  }, [isVisible]);

//    JobsData?.pages[0]?.data?.rows

  return (
    <div>
      <JobFilters/>
      <JobsListing data={composeJobsData(JobsData)} />
      <div  style={{height:"60px"}} ref={targetRef} />
    </div>
  );
};

export default Jobs;
