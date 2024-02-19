import { useEffect, useRef } from "react";
import NProgress from "nprogress";
import { useRouter } from "next/navigation";
import eventBus from "@/utils/eventBus.utils";
// import "nprogress/nprogress.css";
// styles imported in vendors

export default function useNextRouter() {
  const router = useRouter();
  const routerProxyRef = useRef(null);

  useEffect(() => {
    const routerProxy = new Proxy(router, {
      get: (target, prop) => {
        if (prop === "push" || prop === "back") {
          return (...args) => {
            NProgress.start();
            eventBus.publish("loading", { show: true, key: "next-link" });

            // Call the original method with the provided arguments
            return target[prop](...args);
          };
        }

        // For other properties/methods, return the original value
        return target[prop];
      },
    });

    routerProxyRef.current = routerProxy;

    return () => {
      routerProxyRef.current = null;
      NProgress.done();
      eventBus.publish("loading", { show: false, key: "next-link" });
    };
  }, [router]);

  return routerProxyRef.current || router;
}
