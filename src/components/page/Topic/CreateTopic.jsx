import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "../../feature/form/Form";

export const CreateTopic = () => {
  const navigate = useNavigate();

  return (
    <>
      <Form
        handlePayload={() => {
          navigate("/topic/current");
        }}
        isLoading={false}
      />
    </>
  );
};
