import React from 'react'

export default function SidebarOption({Icon, title, number, selected}) {
  return (
    <div className={`sidebar__option ${selected && 'sidebar__option--active'}`}>
      <Icon/>
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  )
}
