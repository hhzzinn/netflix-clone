import { useState, useEffect } from "react";

const RandomNumber = () => {
  const [number, setNumber] = useState(0);
  const initialMembers = [
    "유경환",
    "강산",
    "최한나",
    "허승이",
    "김영화",
    "이형진",
    "강찬희",
  ];

  const [selectedMembers, setSelectedMembers] = useState(initialMembers);

  const [members, setMembers] = useState([]); // 뽑힌 멤버는 배열안의 배열이 들어갑니다.
  const [team, setTeam] = useState([]);

  const [isMakingTeam, setIsMakingTeam] = useState(false);
  const [max, setMax] = useState(0);
  const [count, setCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSubmit = (event) => {
    event.preventDefault();

    if (max <= 0) {
      return alert("팀 크기를 선택해주세요.");
    }

    if (count <= 0) {
      return alert("팀원을 모두 뽑았습니다.");
    }

    let number = Math.floor(Math.random() * members.length);
    const member = members[number];

    const found = selectedMembers[currentIndex].find((person) => {
      if (person === member) {
        return person;
      }
    });
    if (found) {
      return alert("중복");
    }

    setCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });

    setSelectedMembers((prev) => {
      let copy = [...prev];

      return copy;
    });

    setTimeout(() => {
      setMembers((prev) => {
        let copy = [...prev];
        copy.splice(number, 1);
        return copy;
      });
    }, 100);
  };

  const onReset = () => {
    setMax(0);
    setCount(0);
  };

  useEffect(() => {
    console.log({ members, max, count, selectedMembers });
  }, [members, max, count, selectedMembers]);

  useEffect(() => {
    if (max > 0) {
      console.log(selectedMembers.length);
      //   setCurrentIndex(selectedMembers.length);
    }
  }, [selectedMembers, max]);

  return (
    <div>
      <h1>팀짜기 프로젝트</h1>
      <h2>남은 팀원</h2>
      <ul>
        {members.map((member) => {
          return <li key={member}>{member}</li>;
        })}
      </ul>
      <form onSubmit={onSubmit}>
        <select
          onChange={(e) => {
            setMax(Number(e.target.value));
            setCount(Number(e.target.value));
          }}
          value={max}
        >
          <option>팀 크기를 선택하세요.</option>
          {members.map((member, index) => {
            return (
              <option key={member} value={index + 1}>
                {index + 1}
              </option>
            );
          })}
        </select>
        <button>팀원 뽑기</button>
        <button type="button" onClick={onReset}>
          초기화
        </button>
      </form>
      <ul>
        {currentIndex >= 0 &&
          selectedMembers[currentIndex]?.map((member) => {
            return <li key={member}>{member}</li>;
          })}
      </ul>
    </div>
  );
};

export default RandomNumber;
