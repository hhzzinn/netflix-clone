import { useState, useEffect, useCallback, useMemo, useRef } from "react";

const initialMembers = [
  "유경환",
  "강산",
  "최한나",
  "허승이",
  "김영화",
  "이형진",
  "강찬희",
];
const RandomNumber = () => {
  const [members, setMembers] = useState(initialMembers);

  const [selectedMembers, setSelectedMembers] = useState([]); // 뽑힌 멤버는 배열

  const [teams, setTeams] = useState([]);

  const [max, setMax] = useState(0);
  const [count, setCount] = useState(0);

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

    const found = selectedMembers?.find((person) => {
      if (person === member) {
        return person;
      }
    });
    if (found) {
      return alert("중복된 사람입니다.");
    }
    setCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });

    setSelectedMembers((prev) => [...prev, member]);

    // setTimeout(() => {
    //   setMembers((prev) => {
    //     let copy = [...prev];
    //     copy.splice(number, 1);
    //     return copy;
    //   });
    // }, 100);
  };

  const onReset = () => {
    setMax(0);
    setCount(0);
  };

  const onConfirm = () => {
    const newTeam = [...selectedMembers];
    setTeams((prev) => [...prev, newTeam]);
    // 선택된 멤버들 초기화
    setSelectedMembers([]);
    // 기존 맴버들에서 선택된 멤버들만 골라서 삭제
    // map, find
    // newTeam.map((person) => {
    //   const index = members.findIndex((member) => {
    //     if (member === person) {
    //       return member;
    //     }
    //   });

    //   if (index >= 0) {
    //     // setMembers((prev) => {
    //     //   let copy = [...prev];
    //     //   copy.splice(index, 1);
    //     //   return copy;
    //     // });
    //     // filter 함수 : 배열.filter()
    //   }
    //   setMembers((prev) => prev.filter((member) => {}));
    // });
    newTeam.map((person) => {
      setMembers((prev) =>
        prev.filter((member) => {
          if (member !== person) {
            return member;
          }
        })
      );
    });

    // max 초기화
    setMax(0);

    const a = "";
    a.at();

    // 변수를 만들고 .찍어보기
    // 할 수 있는 함수, 값 찾아서 console.log()로 출력해보기.
    // 이걸로 뭐 할 수 있을 지 고민해보기
  };

  useEffect(() => {
    console.log({ teams });
  }, [teams]);

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
        {selectedMembers.map((member, index) => {
          return (
            <li key={member}>
              {index + 1}. {member}
            </li>
          );
        })}
      </ul>

      {max > 0 && count === 0 && <button onClick={onConfirm}>멤버 확정</button>}

      {teams.length > 0 && (
        <>
          <h1>만들어진 팀</h1>
          <ul>
            {teams.map((team, index) => {
              return (
                <li key={team.length}>
                  <h3>
                    <br />
                    {index + 1}번 팀
                  </h3>

                  <ul>
                    {team.map((member) => {
                      return <li key={member}>{member}</li>;
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default RandomNumber;
