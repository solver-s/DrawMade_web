import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "./form/Form";
import { loadLocalStorage } from "../../../utils/loadLocalStorage";

import mockData from "../../../assets/mock/data.json";

export const CreateTopic = () => {
  const navigate = useNavigate();

  const handlePayload = useCallback((univ, depart, keywords) => {
    navigate("/topic/current");
  }, []);

  return (
    <>
      <Form handlePayload={handlePayload} isLoading={false} />
    </>
  );
};
