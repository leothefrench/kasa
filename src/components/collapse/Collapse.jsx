import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleUp, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import './collapse.scss'

const upArrow = <FontAwesomeIcon icon={faAngleUp} />
const downArrow = <FontAwesomeIcon icon={faAngleDown} />

const Collapse = ({title, content}) => {

  const [open, setOpen] = useState(false)

  const openCollapse = () => {
    setOpen((open) => !open)
  }

  return (
    <>
      <div onClick={openCollapse} className='collapse'>
        <h2 className='collapse__title'>{title}</h2>
        {!open ? <i className='collapse__arrow'>{downArrow}</i> : <i className='collapse__arrow'>{upArrow}</i>}
      </div>

      {open && <div className='collapse__content'>{content}</div>}
    </>
  )
}
export default Collapse