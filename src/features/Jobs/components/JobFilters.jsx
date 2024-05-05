import { Select } from "../../../components";
import styles from "./styles/jobfilters.module.css";

const JobFilters = ({filters}) => {
  return (
    <div className={styles.filters_root}>
      <div className={styles.filter_wrapper}>
        <Select placeholder="Roles" />
      </div>
      <div className={styles.filter_wrapper}>
        <Select placeholder="Roles" />
      </div>
      <div className={styles.filter_wrapper}>
        <Select placeholder="Roles" />
      </div>
      <div className={styles.filter_wrapper}>
        <Select placeholder="Roles" />
      </div>
      <div className={styles.filter_wrapper}>
        <Select placeholder="Roles" />
      </div>
    </div>
  );
};

export default JobFilters;
