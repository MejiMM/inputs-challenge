import "../styles/Input.css";

const renderInput = (
  divInput,
  typeInput = "",
  helperText = "",
  value = "",
  numRow,
  size = "",
  color = "primary",
  option,
  textOption = "",
  startIcon="false",
  endIcon="false"
) => {
  if (typeInput === "error") {
    if(helperText.length > 0){
      divInput.push(
        <div className="flex--div error">
          <p>{`<Input ${helperText} error/>`}</p>
          <label htmlFor="inp" className="label--error" >Label</label>
          <input
            key={Math.random()}
            className={`error ${size} ${option}`}
            type="text"
            defaultValue={value}
            placeholder={`Placeholder`}
          ></input>
          <p className="helper--error">{helperText}</p>
        </div>)
    }else {
      divInput.push(
        <div className="flex--div error">
          <p>{`<Input error ${textOption}/>`}</p>
          <label className="label--error" htmlFor="inp">Label</label>
          <input
            key={Math.random()}
            id="inp"
            type="text"
            defaultValue={value}
            placeholder={`Placeholder`}
            className={`error ${size} ${option}`}
          ></input>
          <p className="helper--error">{helperText}</p>
        </div>)
    }
  } else if (typeInput === "disabled") {
    divInput.push(
      <div className="flex--div">
        <p>{"<Input disabled/>"}</p>
        <label htmlFor="inp">Label</label>
        <input id="inp" type="text" defaultValue={value} disabled placeholder="Placeholder" key={Math.random()}/>
      </div>
    );
  } else if (typeInput === "multiline") {
    if(helperText.length > 0) {
      divInput.push(
        <div className="flex--div">
          <p>{`<Input multiline rows=${numRow}/>`}</p>
          <label htmlFor="inp">Label</label>
          <textarea
            className={`${color} ${size}`}
            key={Math.random()}
            id="inp"
            type="text"
            defaultValue={value}
            rows={numRow}
            placeholder="Placeholder"
          >           
          </textarea>
          <p>{helperText}</p>
        </div>
      );
    }else{
      divInput.push(
      <div className="flex--div">
        <p>{`<Input multiline rows=${numRow}/>`}</p>
        <label htmlFor="inp">Label</label>
        <textarea
          className={`${color} ${size}`}
          key={Math.random()}
          id="inp"
          type="text"
          defaultValue={value}
          rows={numRow}
          placeholder="Placeholder"
        >           
        </textarea>
      </div>
    );
  }
  } else {
    if(helperText.length > 0) {
      divInput.push(
        <div className={`flex--div ${size}`}>
          <p>{`<${typeInput} ${textOption}/>`}</p>
          <label>Label</label>
          <input
            key={Math.random()}
            className={`${color} ${option}`}
            type="text"
            defaultValue={value}
            placeholder={`${startIcon === "true" ? "" : ""} Placeholder `}
          />
          <p className="helper--text">{helperText}</p>
        </div>
      );
    }else{
      divInput.push(
      <div className={`flex--div ${size}`}>
        <p>{`<${typeInput} ${textOption}/>`}</p>
        <label>Label</label>
        <input
          key={Math.random()}
          className={`${color} ${option}`}
          type="text"
          defaultValue={value}
          placeholder={`${startIcon === "true" ? "" : ""} Placeholder ${endIcon === "true" ? "" : ""}`}
        />
      </div>
    );
  }
  }
};

export default function Input({
  typeInput,
  helperText,
  value,
  startIcon,
  endIcon,
  size,
  color,
  numRow,
  option,
  textOption
}) {

    const divInput = [];
    renderInput(divInput, typeInput, helperText, value, numRow, size, color, option, textOption, startIcon, endIcon);

  return (
    <>
      {divInput}
      {/* <p>{`<Input ${typeInput} ${numRow > 0 ? `rows=${numRow}` : ""} />`}</p>
        <label>
            Label
        </label>
        {input ? 
            <input type="text" placeholder="Placeholder" {...isDisabled && "disabled"} {...value.length > 0 ? value={value} : value=""}/>
            : <textarea rows={numRow}></textarea>}
        {helperText.length > 0 ? <p>{helperText}</p> : ""} */}
    </>
  );
}
