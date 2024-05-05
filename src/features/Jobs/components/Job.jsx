import Paper from "@mui/material/Paper";
import styles from "./styles/job.module.css";
import { Typography } from "@mui/material";
import { cap } from "../utils/helpers";

const Job = ({ companyName, logoUrl, location, role, maxSal, minSal ,compDetails}) => {
  return (
    <Paper className={styles.job_root} elevation={2}>
      <div className={styles.header}>
        <div className={styles.img_wrapper}>
          <img src={logoUrl} alt={companyName} />
        </div>
        <div className={styles.details_wrapper}>
          <Typography className={styles.comp_name}>
            {cap(companyName)}
          </Typography>
          <Typography className={styles.role}>{cap(role)}</Typography>
          <Typography className={styles.location}>{cap(location)}</Typography>
        </div>
      </div>
      <div className={styles.salary}>
        <Typography className={styles.salary_cont}>{`Estimated Salary: $${minSal || 0} - ${maxSal}`}</Typography>
      </div>

      <div className={styles.content_wrapper}>
      <Typography ography className={styles.about}>About Company:</Typography>
      <div className={styles.content}>
      <Typography ography className={styles.about_us}>About us</Typography>
      <Typography>
        {compDetails}
      </Typography>
      </div>

      </div>
    </Paper>
  );
};

export default Job;
