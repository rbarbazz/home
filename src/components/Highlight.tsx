import commonClasses from '../css/common.module.css'

const Highlight = ({ children }) => {
  return <span className={commonClasses['highlighted-text']}>{children}</span>
}

export default Highlight
