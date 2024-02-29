// import Image from "next/image";
"use client";
import styles from "./page.module.css";
import { Input } from "../components-react/dist";
import { SetStateAction, useState } from "react";

export default function Home() {
  const [val, setVal] = useState("");
  const handleEnter = (e: SetStateAction<string>) => {
    setVal(e);
  };
  return (
    <main className={styles.main}>
      <div>
        <Input
          title="标题"
          type={"text"}
          onPressEnter={handleEnter}
        ></Input>
        <p>组件输入数据：{val}</p>
      </div>
    </main>
  );
}
