import { Button } from "react-bootstrap";
import Spinner from "react-bootstrap/esm/Spinner";

interface AnimatedButtonProps {
  loading: boolean;
  onClick: () => void;
}

export default function AnimatedButton({
  loading,
  onClick,
}: AnimatedButtonProps) {
  return (
    <Button onClick={onClick}>
      {loading ? <Spinner size="sm" /> : "Test API"}
    </Button>
  );
}
