export const useButton = ({ isDisabled = false, content, onClick, isLoading = false }) => {
  const handleClick = !isDisabled && !isLoading ? onClick : null;
  const $isDisabled = isDisabled || isLoading;
  const buttonContent = isLoading ? "주제 생성 중..." : content;

  return {
    handleClick,
    $isDisabled,
    buttonContent,
  };
};
