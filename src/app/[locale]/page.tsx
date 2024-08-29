"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

export default function HomePage() {
  const [select, setSelect] = useState<boolean>(false);
  const route = useRouter();
  const hanldeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("Gia tri nguoi dung chon", e.target.value);
    // setSelect(e.target.value);
    if (e.target.value == "en") {
      route.push("/en");
      setSelect(true)
    } else {
      route.push("/vi");
      setSelect(false)
    }
  };

  const t = useTranslations("HomePage");
  return (
    <h1>
      {t("title")} <br />
      <select onChange={hanldeChange} name="" id="">
        <option value="vi" selected={select}>
          Tiếng việt
        </option>
        <option value="en" selected={select}>
          English
        </option>
      </select>
    </h1>
  );
}
