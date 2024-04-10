const API_END_POINT =
  "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";

export const request = async (nodeId) => {
  return [
    {
      id: "5",
      name: "2021/04",
      type: "DIRECTORY",
      filePath: null,
      parent: {
        id: "1",
      },
    },
    {
      id: "19",
      name: "물 마시는 사진",
      type: "FILE",
      filePath: "/images/a2i.jpg",
      parent: {
        id: "1",
      },
    },
  ];

  try {
    const res = await fetch(`${API_END_POINT}/${nodeId ? nodeId : ""}`);

    if (!res.ok) {
      throw new Error("서버의 상태가 이상합니다!");
    }

    return await res.json();
  } catch (e) {
    throw new Error(`무언가 잘못 되었습니다! ${e.message}`);
  }
};
