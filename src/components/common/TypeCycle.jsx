import { useTypeCycle } from '../../hooks/useTypeCycle';

function TypeCycle({ texts = [], className = '', typingSpeed = 80, pause = 1200 }) {
  const typedText = useTypeCycle({ texts, typingSpeed, pause });

  return <span className={className}>{typedText}</span>;
}

export default TypeCycle;
