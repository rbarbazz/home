import classes from '../css/Highlight.module.css'

const Highlight = ({ children }) => {
  return <span className={classes['highlighted-text']}>{children}</span>
}

export default Highlight
