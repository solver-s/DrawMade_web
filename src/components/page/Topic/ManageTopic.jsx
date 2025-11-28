import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { BorderBox, Bundle } from "../../styled/StyledBox";
import { h_p } from "../../styled/StyledText";
import { loadLocalStorage } from "../../../utils/loadLocalStorage";

import mockData from "../../../assets/mock/data.json";

const BoxHeader = styled(h_p)`
  gap: 0.2rem;

  & > h2 {
    font-size: 1rem;
  }
`;

const BoxInfo = styled.div``;

const TopicBox = styled(BorderBox)`
  padding: 1rem;
  cursor: pointer;

  p {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.subColor};
  }
`;

const TopicBundle = styled(Bundle)`
  & > div:first-child {
    border: 0.2rem solid ${({ theme }) => theme.inverseColor};
  }
`;

export const ManageTopic = () => {
  const [topics, setTopics] = useState([mockData, mockData]);
  const navigate = useNavigate();

  return (
    <TopicBundle>
      {topics.map((topic, i) => {
        return (
          <TopicBox key={i} onClick={() => navigate("/topic/current")}>
            <BoxHeader>
              <h2>{topic.title}</h2>
              <p>{`${topic.school_name} · ${topic.department_name}`}</p>
            </BoxHeader>
            <BoxInfo>
              <p>{topic.created_at.slice(0, 10)}</p>
            </BoxInfo>
          </TopicBox>
        );
      })}
    </TopicBundle>
  );
};
