import { useEffect, useState } from "react";
import { useUserContext } from "@/contexts";
import { useRouter } from "next/router";
import { Orders, Account, Addresses, OrderDetail, WishList, UserAddresses } from "@/components/Account";
import { Breadcrumbs, Divider, SvgLoader, TabItem } from "@/components/Others";
import { LandingLayout } from "@/layouts";
import styles from "./Tab.module.scss";
export default function Tab() {
  const router = useRouter();

  const {
    data,
    data: { user: { additionalInfo: { name = "", family = "" } = {} } = {} } = {},
    logout,
  } = useUserContext();

  const routes = [
    {
      route: "account",
      label: "حساب کاربری",
      display: true,
      icon: "user-box",
      component: <Account />,
    },
    {
      divider: true,
      display: true,
    },
    {
      route: "orders",
      label: "سفارشات",
      display: true,
      icon: "bag",
      component: <Orders />,
    },

    {
      route: "addresses",
      label: "آدرس‌ها",
      display: true,
      icon: "map",
      component: <UserAddresses />,
    },
    {
      route: "whishList",
      label: "علاقه‌مندی‌ها",
      display: true,
      icon: "favorite",
      component: <WishList />,
    },
    {
      route: "order-detail",
      label: "جزئیات سفارش",
      icon: "bag",
      display: false,
      component: <OrderDetail />,
    },
  ];

  const [currentPath, setCurrentPath] = useState(router.query.tab?.[0]);
  const findSlugMatchingCmp = () => routes.find((item) => item.route == currentPath);
  const cmp = findSlugMatchingCmp()?.component;

  useEffect(() => {
    setCurrentPath(router.query.tab?.[0]);
    const foundComponent = findSlugMatchingCmp();
    if (currentPath && !foundComponent) router.push("/404");
  }, [router]);

  return (
    <div className="row mt-1 mb-5">
      <div className={styles.breadcrumbs}>
        <Breadcrumbs />
      </div>
      <div className="col-2">
        <div className={styles.tab}>
          <div className={styles["user-info-wrapper"]}>
            <div className={styles["user-info"]}>
              <figure className={styles["user-info__img-wrapper"]}>
                <img className={styles["user-info__img"]} src="/assets/img/brand.png" alt="user-profile" />
              </figure>
              <div className={styles["user-info__details"]}>
                <span className={styles["user-info__details-name"]}> {`${name} ${family}`}</span>
                <span className={styles["user-info__details-number"]}>{data?.user?.phone}</span>
              </div>
            </div>
            <SvgLoader name="edit" />
          </div>

          {routes
            ?.filter((item) => item.display)
            ?.map((item, key) => (
              <>
                {console.log(item)}
                {item.divider ? (
                  <Divider />
                ) : (
                  <TabItem key={key} route={item.route} currentRoute={currentPath}>
                    <SvgLoader name={item.icon} />
                    <span>{item.label}</span>
                  </TabItem>
                )}
              </>
            ))}
          <Divider width={"100%"} />
          <TabItem onClick={logout}>
            <SvgLoader name="sign-out" />
            <span>خروج</span>
          </TabItem>
        </div>
      </div>
      <div className={["col-9", styles.form].join(" ")}>{cmp}</div>
    </div>
  );
}

Tab.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};

