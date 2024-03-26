function Buttons({ onAdd5, onAdd10, onSubtract15, onReset }) {
  return (
    <>
      <button onClick={onAdd5}>+5</button>
      <button onClick={onAdd10}>+10</button>
      <button onClick={onSubtract15}>-15</button>
      <button onClick={onReset}>Reset</button>
    </>
  )
}

export default Buttons