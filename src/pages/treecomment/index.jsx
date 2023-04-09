import React, { useState } from "react";

function Class5() {
  const fun1 = (maxNum, deep) => {
    if (deep === 0) {
      return [];
    }
    const list = [];
    const num = Math.random() * maxNum;
    for (let i = 0; i < num; i++) {
      list[i] = {
        title: deep + "-" + i,
        label: "测试文案",
        defaultExpend: true,
      };
      // @ts-ignore
      list[i].children = fun1(maxNum, deep - 1);
    }
    return list;
  };

  return (
    <div>
      <TreeComponent
        title={"第一个"}
        label={"xxx"}
        defaultExpend={true}
        children={fun1(2, 6)}
      />
    </div>
  );
}

const TreeComponent = (props) => {
  const { title, label, children, defaultExpend } = props;
  const [isShow, setIsShow] = useState(false);
  return (
    <div>
      {title}|{label}
      <br></br>
      {isShow ? (
        <div>
          <div onClick={() => setIsShow(false)}>收起^</div>
          <div style={{ marginLeft: 10 }}>
            {children?.map((item, index) => (
              <TreeComponent {...item} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div onClick={() => setIsShow(true)}>展开v</div>
      )}
    </div>
  );
};

export default Class5;
