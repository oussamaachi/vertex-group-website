import { Link } from 'react-router-dom';

export default function Button({ children, to, href, onClick, variant = 'clay', size = 'md', className = '', type = 'button' }) {
  const base = 'btn-magnetic inline-flex items-center justify-center font-heading font-semibold rounded-full transition-colors';
  
  const variants = {
    clay: 'bg-clay text-cream',
    moss: 'bg-moss text-cream',
    outline: 'border-2 border-moss text-moss hover:bg-moss hover:text-cream',
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
      <span className="btn-slide rounded-full"></span>
      <span className="btn-text">{children}</span>
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
