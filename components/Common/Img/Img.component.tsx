"use client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./Img.module.scss";
import Image from "next/image";
import clsx from "clsx";
import { ImgComponentType } from "@/types/common.type";

const Img: React.FC<ImgComponentType> = ({
  path,
  headers,
  alt = "alt text",
  fallbackFile = "/assets/img/noImage.png",
  figureStyle = {},
  onLoadEnd = () => {},
}) => {
  const [src, setSrc] = useState(null);
  const [reTry, setReTry] = useState(1);

  const [isLoading, setIsLoading] = useState(null);
  const imgRef = useRef();
  const getStaticFile = async () => {
    setIsLoading(true);
    if (
      path &&
      imgRef.current &&
      imgRef.current.getBoundingClientRect().top < window.innerHeight
    )
      try {
        const response = await axios.get(path, {
          responseType: "blob",
          ...headers,
        });
        const reader = new FileReader();
        reader.readAsDataURL(response?.data);
        reader.addEventListener("load", () => {
          setSrc(reader.result);
          setIsLoading(false);
        });
      } catch (error) {
        if (reTry < 3) {
          setReTry(reTry + 1);
        } else {
          setSrc(fallbackFile);
        }
        setIsLoading(false);
        onLoadEnd();
        console.log("error in getStaticFile", error);
      } finally {
        setIsLoading(false);
      }
    else {
      setSrc(fallbackFile); //TODO
      setIsLoading(false);
    }
  };
  useEffect(() => {
    setReTry(1);
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        getStaticFile();
        observer.disconnect();
      }
    });

    observer.observe(imgRef.current);

    return () => {
      setSrc(null);
      observer.disconnect();
    };
  }, [path]);
  return src ? (
    <Image
      ref={imgRef}
      width={100}
      height={100}
      className={clsx(styles["img"], {
        [styles["img--contain"]]: src === fallbackFile,
      })}
      src={src}
      alt={alt}
    />
  ) : (
    <figure ref={imgRef} className={styles.loading}>
      <Skeleton className={styles.loading} />
    </figure>
  );
};
export default Img;
