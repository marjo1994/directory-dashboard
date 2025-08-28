import { Button } from "../../atoms/Button/Button";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import styles from "./CreateNewPopover.module.scss";

export const CreateNewPopover = () => {
  return (
    <Popover className={styles.createNewPopover}>
      <PopoverButton
        as={Button}
        variant="primary"
        className={styles.btnPopover}
      >
        Create new
        <span className={styles.plusIcon}>+</span>
      </PopoverButton>

      <PopoverPanel className={styles.createNewPopover_panel}>
        <button className={styles.createNewPopover_item}>
          <span className={styles.createNewPopover_icon}></span>
          <span className={styles.createNewPopover_label}>Upload Files</span>
        </button>
        <button className={styles.createNewPopover_item}>
          <span className={styles.createNewPopover_icon}></span>
          <span className={styles.createNewPopover_label}>Upload Folder</span>
        </button>
        <button className={styles.createNewPopover_item}>
          <span className={styles.createNewPopover_icon}></span>
          <span className={styles.createNewPopover_label}>New Folder</span>
        </button>
        <button className={styles.createNewPopover_item}>
          <span className={styles.createNewPopover_icon}></span>
          <span className={styles.createNewPopover_label}>More</span>
        </button>
      </PopoverPanel>
    </Popover>
  );
};
