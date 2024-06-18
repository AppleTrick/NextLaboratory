import styles from './sidebarHeader.module.css';

const SidebarHeader: React.FC = () => {
  return (
    <div className={styles.head}>
      <div className={styles.userImg}>
        <img className={styles.img} src="mokoko.jpeg" alt="User Image" />
      </div>
      <div className={styles.userDetails}>
        <p className={styles.title}>mokoko</p>
        <p className={styles.name}>mokoko</p>
      </div>
    </div>
  );
};

export default SidebarHeader;
