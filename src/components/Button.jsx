import { Link } from 'react-router-dom';

export default function Button({ children, to, href, onClick, variant = 'safety', size = 'md', className = '', type = 'button' }) {
  const base = 'btn-magnetic inline-flex items-center justify-center font-heading font-semibold rounded-full transition-colors whitespace-nowrap';
  
  const variants = {
    safety: 'bg-safety text-paper',
    navy: 'bg-navy text-paper',
    outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-paper',
  };
  
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const inner = (
    <>
      <span className={`btn-slide rounded-full ${variant === 'outline' ? 'bg-navy' : 'bg-navy-dark'}`}></span>
      <span className="btn-text relative z-10 inline-flex items-center justify-center gap-2 whitespace-nowrap">{children}</span>
    </>
  );

  if (to) {
    return <Link to={to} className={classes}>{inner}</Link>;
  }

  if (href) {
    return <a href={href} className={classes} target="_blank" rel="noopener noreferrer">{inner}</a>;
  }

  return <button type={type} onClick={onClick} className={classes}>{inner}</button>;
}
