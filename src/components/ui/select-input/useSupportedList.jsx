import { useEffect, useMemo, useState } from "react";

import { loadLocalStorage } from "../../../utils/loadLocalStorage";

const mock = [
  { id: "support_1", name: "지원대상 1" },
  { id: "support_2", name: "지원대상 2" },
  { id: "support_3", name: "지원대상 3" },
  { id: "support_4", name: "지원대상 4" },
];

export const useSupportedList = (key, getSelect) => {
  const [supportedList, setSupportedList] = useState(() => {
    return loadLocalStorage(key);
  });

  useEffect(() => {
    if (supportedList) return;

    const fetchData = async () => {
      try {
        // const data = await getSelect();
        const data = mock;
        setSupportedList(data);
        window.localStorage.setItem(key, JSON.stringify(data));
      } catch (e) {
        console.error("데이터 로드 중 오류 발생", e);
      }
    };

    fetchData();
  }, [supportedList]);

  const supportObj = useMemo(() => {
    return { supportedList, setSupportedList };
  }, [supportedList]);

  return supportObj;
};
