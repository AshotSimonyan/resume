function AnimatedGradientText({
  text,
  className,
  duration = 8,
  gradient = 'linear-gradient(135deg, #ef4444 0%, #ec4899 33%, #a855f7 66%, #ef4444 100%)',
  as = 'h1'
}) {
  const Tag = as;

  return (
    <Tag
      className={className}
      style={{
        backgroundImage: gradient,
        backgroundSize: '400% 400%',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        animation: `gradientShift ${duration}s linear infinite`
      }}
    >
      {text}
    </Tag>
  );
}

export default AnimatedGradientText;
