import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode, memo, useEffect, useRef, useState } from "react";
import { useRequest } from "ahooks";

const A = ({ data: initData }: { data: any[] }) => {
  const [tip, setTip] = useState('')
  useKeepAliveMountEffect(()=> {
    console.log('组件激活---A')
    setTip(new Date().getTime().toString())
  }, uid)
  useKeepAliveDeactivated(()=> {
    console.log('组件失活---A')
  }, uid)

  const router = useRouter();
  const [data, setData] = useState<any>(initData ?? []);

  const { run } = useRequest(
    () => {
      return new Promise((resolve, reject) => {
        resolve(new Array(50).fill(0));
      });
    },
    {
      onSuccess(res) {
        console.log("????ccccc", res);
        setData((p) => [...p, ...res]);
      },
      manual: true,
    }
  );

  return (
    <main
      className={`w-full flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-row w-full mb-4 h-[200px] bg-[red]"
          >
            {index + 1}
            <div
              className="ml-20 w-100 h-10 bg-[blue]"
              onClick={() => {
                router.push(`/setting`);
              }}
            >
              Setting{tip}
            </div>
          </div>
        );
      })}

      <div
        className="w-100 h-10 bg-[blue]"
        onClick={() => {
          run();
        }}
      >
        下一页
      </div>
    </main>
  );
};

import { useKeepAliveActivated as useKeepAliveMountEffect, withKeepAlive, getUniqueId, useKeepAliveDeactivated, KeepAlive } from "./KeepAlive";
const uid = getUniqueId()
export default withKeepAlive(A, uid)
// export default A