import React from 'react'

function Alert(props) {
  if(!props.alert){
    return null;
  }
  return (
    <div style={{ minHeight: '50px' }}>
  {props.alert && (
    <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
    >
      {props.alert.msg}
    </div>
  )}
</div>

  )
}

export default Alert