// 경로 : src/components/PhoneList/PhoneList.js

import React from "react";
import PhoneItem from "../PhoneItem/PhoneItem";
import styled from "styled-components";

const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
`;


const PhoneList = ({ list, deleteItem }) => {
  return (
    <PhoneWrapper>
      {/* Object.values(list) 는 Json데이터의 Value값으로 이루어진 배열 생성 */}
      {/* key는 map 함수를 통해 반복적으로 생성되는 컴포넌트를 생성할 경우 넣어야 하는 필수 속성 */}
      {Object.values(list).map(item => {
        return <PhoneItem {...item} key={item.id} onClick={deleteItem} />;
      })}
    </PhoneWrapper>
  );
};


// const PhoneList = ({ list }) => {
//   return (
//     <PhoneWrapper>
//       <PhoneItem {...list["0"]} />
// 	  {/* <PhoneItem id={list["0"].id} name={list["0"].name} phone={list["0"].phone} /> 과 동일 */}
//       <PhoneItem {...list["1"]} />
//       <PhoneItem {...list["2"]} />
//       <PhoneItem {...list["3"]} />
//       <PhoneItem {...list["4"]} />
//     </PhoneWrapper>
//   );
// };


export default PhoneList;