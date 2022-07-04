import { Menu } from "antd";
import Link from "next/link";

const MenuOne = (
  <Menu
    items={[
      {
        key: "cpm",
        label: <Link href="#">CPM Calcuator</Link>,
      },
      {
        key: "rpm",
        label: <Link href="#">RPM Calcuator</Link>,
      },
      {
        key: "eCPM",
        label: <Link href="#">eCPM Calcuator</Link>,
      },
      {
        key: "epmv",
        label: <Link href="#">EPMV Calcuator</Link>,
      },
    ]}
  />
);

export default MenuOne;
