export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
  as = 'div',
  ...rest
}) {
  const Tag = as;
  const classes = ['scroll-reveal', `scroll-reveal--${variant}`, className].filter(Boolean).join(' ');

  return (
    <Tag
      className={classes}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function revealDelay(index, step = 90, base = 0) {
  return base + index * step;
}
