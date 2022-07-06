import { Menu } from "antd";
import Link from "next/link";

const MenuTwo = (
  <Menu
    items={[
      {
        key: "cpc",
        label: (
          <Link href="/ad-metrics/cost-per-click/">Cost Per Click (CPC)</Link>
        ),
      },
      {
        key: "cpm",
        label: (
          <Link href="/ad-metrics/cost-per-mile/">Cost Per Mile(CPM)</Link>
        ),
      },
      {
        key: "adView",
        label: <Link href="/ad-metrics/ad-viewability/">Ad Viewability</Link>,
      },
      {
        key: "adImpressions",
        label: <Link href="/ad-metrics/ad-impressions/">Ad Impressions</Link>,
      },
      {
        key: "pageRPM",
        label: <Link href="/ad-metrics/page-rpm/">Page RPM</Link>,
      },
      {
        key: "eCPM",
        label: <Link href="/ad-metrics/ecpm/">eCPM</Link>,
      },
      {
        key: "epmv",
        label: <Link href="/ad-metrics/epmv/">EPMV</Link>,
      },
    ]}
  />
);

export default MenuTwo;
