import { useState, useEffect } from "react"
import SampleItem from "./SampleItem"

const PDSample1 = () => {
  const [text, setText] = useState("")
  const name = {
    first: "덕현",
    last: "윤",
  }

  return (
    <div>
      <h1>sample 1</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

      {/* 2. 컴포넌트를 불러오는 곳에서 정확한 속성을 입력해준다. */}
      <SampleInput text={text} />
      <SampleInput text="너는 병아리다" />

      <SampleOBJ
        // first={name.first} last={name.last}
        {...name}
        middle="세바스찬"
      />
    </div>
  )
}

export default PDSample1

// 1. 컴포넌트를 만드는 곳에서 인자값으로 받아올 속성을 정해준다.

//4. 인자값의 이름을 고유하게 유지한다. 그리고 불러오는 곳에서도 인자값이 고유하게 작명한다.
const SampleInput = (props) => {
  // 3. 컴포넌트의 인자를 정할 때 js에서는 타입을 지정할 수 없음. 그래서 좀 불편

  // props = {
  // text: string
  // }
  return (
    <div>
      <p>
        <b>{props.text}</b>
      </p>
      <SampleItem {...props} />
    </div>
  )
}

// 내가 받아야할 인자값과 전달해야하는 값이 동일한 객체 형태일 때에만 {...값} 으로 전달 받을 수 있다.

// 내가 필요한 것을 꺼내오면 됨
const SampleOBJ = ({ first, last, middle }) => {
  // 객체를 받아올 때는 {}가 아닌 그냥 ()안에다가 바로 인자를 선언해서 가져오면 됨

  // const { first, last } = name

  return (
    <div>
      {/* 성, 이름 */}
      {last}, {middle}, {first}
    </div>
  )
}

// Props-Drilling을 할 때 리액트 컴포넌트 끼리 주고 받는 값은 객체다.
