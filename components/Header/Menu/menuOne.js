import { Menu } from "antd";
import Link from "next/link";

const MenuOne = (
  <Menu
    items={[
      {
        key: "cpm",
        label: <Link href="/">CPM Calcuator</Link>,
      },
      {
        key: "rpm",
        label: <Link href="/calculators/rpm-calculator/">RPM Calcuator</Link>,
      },
      {
        key: "eCPM",
        label: <Link href="/calculators/ecpm-calculator/">eCPM Calcuator</Link>,
      },
      {
        key: "epmv",
        label: <Link href="/calculators/epmv-calculator/">EPMV Calcuator</Link>,
      },
    ]}
  />
);

export default MenuOne;
