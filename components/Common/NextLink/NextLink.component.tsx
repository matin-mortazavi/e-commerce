"use client";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import NProgress from "nprogress";
import { useCoreContext } from "@/contexts";
import eventBus from "@/utils/eventBus.utils";
// import "nprogress/nprogress.css";
// styles imported in vendors

NProgress.configure({
  template:
    '<div class = "overlay"> <div class="wrapper"> <div class="loading"><div class="bar" role="bar" /></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div></div>',
  parent: "body",
});

export default function NextLink({ href, children, onClick, ...props }) {
  const pathname = usePathname();
  const params = useSearchParams();

  const getPathname = () => (params.size ? `${pathname}?${params.toString()}` : pathname);

  const handleClick = (e) => {
    onClick?.(e);
    if (getPathname() !== href && props?.target !== "_blank") {
      NProgress.start();
      eventBus.publish("loading", { show: true, key: "next-link" });
    }
  };

  useEffect(() => {
    return () => {
      eventBus.publish("loading", { show: false, key: "next-link" });
      NProgress.done();
    };
  }, []);

  return (
    <Link {...props} href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}
