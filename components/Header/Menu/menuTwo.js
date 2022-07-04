import { Menu } from "antd";
import Link from "next/link";

const MenuTwo = (
  <Menu
    items={[
      {
        key: "cpc",
        label: <Link href="#">Cost Per Click (CPC)</Link>,
      },
      {
        key: "cpm",
        label: <Link href="#">Cost Per Mile(CPM)</Link>,
      },
      {
        key: "adView",
        label: <Link href="#">Ad Viewability</Link>,
      },
      {
        key: "adImpressions",
        label: <Link href="#">Ad Impressions</Link>,
      },
      {
        key: "pageRPM",
        label: <Link href="#">Page RPM</Link>,
      },
      {
        key: "eCPM",
        label: <Link href="#">eCPM</Link>,
      },
      {
        key: "epmv",
        label: <Link href="#">EPMV</Link>,
      },
    ]}
  />
);

export default MenuTwo;
