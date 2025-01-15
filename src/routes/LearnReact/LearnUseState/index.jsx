import { useState } from "react";

const UseState = () => {
  const [string, setString] = useState("");

  // 함수 이름은 버튼의 이름을 따서 앞에 on만 붙여서 적을 수도 있다.
  const onChangeString = () => {
    // 1. 직접 입력하기
    // 초기값과 동일한 타입의 값을 입력한다.
    // setString("이형진");

    // 2. 이전 값을 가져와서 가공처리 하기
    setString((prev) => {
      return `${prev}형진`;
    }); //여기도 초기값의 타입과 똑같아야 된다. // 무조건 return
  };

  const [number, setNumber] = useState(0);

  const onMinus = () => {
    setNumber((prev) => {
      return prev - 1; // 숫자
    });
  };

  const onReset = () => {
    // 1. 값을 직접 넣는다. 초기값과 같은 타입
    setNumber(0);
  };

  const onPlus = () => {
    setNumber((prev) => {
      return prev + 1;
    });
  };

  const [boolean, setBoolean] = useState(false);
  const [boolean2, setBoolean2] = useState(false);
  const [boolean3, setBoolean3] = useState(false);

  const onSwitch1 = () => {
    // setBoolean((prev) => !prev);
    setBoolean((prev) => {
      // boolean 타입은 모/도 참/거짓 true/false
      // !boolean => boolean의 반대 값
      return !prev;
    });
  };

  const onSwitch2 = () => {
    setBoolean2((prev) => !prev);
  };

  const onSwitch3 = () => {
    setBoolean3((prev) => {
      return !prev;
    });
  };

  const onMasterSwitch = () => {
    if (!boolean && !boolean2 && !boolean3) {
      setBoolean(true);
      setBoolean2(true);
      setBoolean3(true);
      return;
    }

    setBoolean(false);
    setBoolean2(false);
    setBoolean3(false);
  };

  const [obj, setObj] = useState({ last: "이", first: "형진" });
  const [first, setFirst] = useState(obj.first);
  const [last, setLast] = useState(obj.last);
  // const onSubmitObj = () => {
  //   const newFirstName = "진";
  //   const newLastName = "서";

  //   // 1. 이름만 개명
  //   // setObj({ first: newFirstName });
  //   // setObj((prev) => {
  //   //   return { ...prev, first: newFirstName };
  //   // });
  //   // 2. 성 만 개명
  //   setObj((prev) => {
  //     return { ...prev, last: newLastName };
  //   });
  //   // 3. 성, 이름 모두 개명
  //   // const newName = {
  //   //   last: newLastName,
  //   //   first: newFirstName,
  //   // };
  //   // // setObj({
  //   // //   last: newLastName,
  //   // //   first: newFirstName,
  //   // // });
  //   // setObj(newName); // 바로 새로운 값을 입력
  // };

  const onLast = () => {
    // 1. 성을 입력하지 않았다면 입력해라.
    if (last.length === 0) {
      return alert("성을 입력하세요.");
    }
    // 2. 이전 이름과 같다면 변경사항이 없다.
    if (last === obj.last) {
      return alert("이전과 같은 성입니다.");
    }
    setObj((prev) => {
      return { ...prev, last };
    });
    alert("성이 변경되었습니다.");
  };

  const onFirst = () => {
    if (first.length === 0) {
      return alert("이름을 입력하세요.");
    }
    if (first === obj.first) {
      return alert("이전과 같은 이름입니다.");
    }
    setObj((prev) => {
      return { ...prev, first };
    });
    alert("이름이 변경되었습니다.");
  };

  const onAddArray = () => {
    const [array, setArray] = useState(["a", "b", "c", "d"]);
    console.log(string.length);
    // 만약에 string 이라는 변수의 길이가 0일때가 아무것도 입력하지 않은 때인데 이떄는 안됨.
    if (string.length === 0) {
      return alert("적어라 좀");
    }
    // if (array.find((item) => item === string)) {
    //   return item;
    // }
    const found = array.find((item) => item === string);
    if (found) {
      return alert("중복된 값");
    }

    setArray((prev) => {
      // console.log(prev);
      // let copy = [...prev, string]; // [string, ...prev]; 스트링을 앞에 두면 앞에 추가됨.

      // console.log(copy);
      return copy;
    });
  };

  const [objArray, setObjArray] = useState([
    { l: "김", f: "영화" },
    { l: "이", f: "형진" },
    { l: "강", f: "찬희" },
  ]);
  const onObjArray = () => {
    const kyh = objArray[0];
    const lhj = objArray[1];

    console.log(isSamePerson(kyh, { l: "김", f: "영화" }));

    const newPerson = { l: last, f: first };
    const found = objArray.find((person) => {
      const isSame = isSamePerson(newPerson, person);
      if (isSame) {
        return person;
      }
      if (found) {
        return alert("동일한 인물이 존재합니다.");
      }
      alert("새로운 인물입니다.");
      setObjArray((prev) => {
        let copy = [...prev, newPerson];
        console.log(copy);

        return copy;
      });
    });
  };

  useEffect(() => {
    console.log({
      objArray,
      array,
    });
  }, [objArray, array]);

  return (
    <div>
      <h1>Learn useState</h1>
      <input
        type="text"
        value={string}
        //onChange는 콜백함수를 불러올 수 있음
        onChange={(e) => setString(e.target.value)}
      />
      {/* input은 무조건 문자열만 허용됨 */}
      {/* <p
        style={{
          fontSize: 100,
          color: "tomato",
        }}
      >
        {string}
      </p> */}
      <button onClick={onChangeString}>Change String</button>
      <div>
        <button onClick={onMinus}>-</button>
        <button onClick={onReset}>{number}</button>
        <button onClick={onPlus}>+</button>
      </div>

      <div>
        <p>Switch is {boolean ? "ON" : "OFF"}</p>
        <button onClick={onSwitch1}>Switch</button>
      </div>
      <div>
        <p>Switch is {boolean2 ? "ON" : "OFF"}</p>
        <button onClick={onSwitch2}>Switch</button>
      </div>
      <div>
        <p>Switch is {boolean3 ? "ON" : "OFF"}</p>
        <button onClick={onSwitch3}>Switch</button>
      </div>

      <button onClick={onMasterSwitch}>Master Switch</button>
      <div>
        <p>
          {obj.last}
          {obj.first}
        </p>
        <input
          type="text"
          value={last}
          //onChange는 콜백함수를 불러올 수 있음
          onChange={(e) => setLast(e.target.value)}
          placeholder="새로운 성을 입력해주세요."
        />
        <button onClick={onLast}>성 계명</button>
      </div>

      <div>
        <input
          type="text"
          value={first}
          //onChange는 콜백함수를 불러올 수 있음
          onChange={(e) => setFirst(e.target.value)}
          placeholder="새로운 이름을 입력해주세요."
        />
        <button onClick={onFirst}>이름 계명</button>
      </div>

      <div>
        <input
          type="text"
          value={string}
          onChange={(e) => setString(e.target.value)}
        />
        <button onClick={onAddArray}>Add To Array</button>
      </div>
      <button onClick={onObjArray}>Check obj Array</button>
    </div>
  );
};

export default UseState;

const isSamePerson = (p1, p2) => {
  const name1 = `${p1.l}${p1.f}`;
  const name2 = `${p2.l}${p2.f}`;
  if (name1 === name2) {
    return true;
  }
  return false;
};

// 문자열과 문자열 비교 간단합니다. === // !== 같은지 다른지

// 숫자 비교는 ===, !==, <, >, <=, >=

// 객체 비교
// 객체의 모든 값을 하나하나 일일이 비교해줘야 한다.
const email = "gudwlsdl2529@gmail.com";
const xxEmail = {
  first: "gudwlsdl2529",
  last: {
    domain: "gmail",
    surfix: "com",
  },
};
