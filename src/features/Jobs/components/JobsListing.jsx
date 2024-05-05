import Job from "./Job";
import styles from "./styles/jobslisting.module.css";

const JobsListing = ({ data = [] }) => {
  console.log(data);
  return (
    <div className={styles.job_list_root}>
      {data?.rows?.map((job) => (
        <Job
          key={job.jdUid}
          companyName={job.companyName}
          logoUrl={job.logoUrl}
          location={job.location}
          role={job.jobRole}
          minSal={job.minJdSalary}
          maxSal={job.maxJdSalary}
          compDetails={job.jobDetailsFromCompany}
        />
      ))}
    </div>
  );
};

export default JobsListing;
