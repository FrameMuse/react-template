import "./Select.scss"

import { useRef, useState } from "react"
import { useClickAway } from "react-use"
import useTheme from "shared/theme/useTheme"
import { classWithModifiers, toggleState } from "utils/common"

import DropDown from "../DropDown/DropDown"
import { childrenToDropDownOptions } from "../DropDown/DropDown.helpers"
import { DropDownOption } from "../DropDown/DropDown.types"
import Icon from "../Icon/Icon"
import { BaseSelectProps } from "./Select.types"

const SELECT_EMPTY_PLACEHOLDER = "Select from list..."

interface SelectMultipleProps<V> extends BaseSelectProps<V> {
  onChange?(value: V[]): void
}

// eslint-disable-next-line @typescript-eslint/ban-types
function SelectMultiple<V extends {} = string>(props: SelectMultipleProps<V>) {
  const theme = useTheme()
  const [expanded, setExpanded] = useState(false)

  const options: DropDownOption<V>[] = childrenToDropDownOptions(props.children)
  const optionDefault = options.find(option => option.value === props.defaultValue)
  const [optionsSelected, setOptionsSelected] = useState<DropDownOption<V>[]>(optionDefault ? [optionDefault] : [])

  function emitOnChange(options: DropDownOption<V>[]) {
    const values = options.map(option => option.value)
    props.onChange?.(values)
  }

  function select(option: DropDownOption<V>) {
    const optionsSelectedNew = [...optionsSelected, option]

    emitOnChange(optionsSelectedNew)
    setOptionsSelected(optionsSelectedNew)
  }

  function deselect(option: DropDownOption<V>) {
    const optionsSelectedNew = optionsSelected.filter(optionSelected => optionSelected.index !== option.index)

    emitOnChange(optionsSelectedNew)
    setOptionsSelected(optionsSelectedNew)
  }

  function toggle(option: DropDownOption<V>) {
    const optionSelected = optionsSelected.find(optionSelected => optionSelected.index === option.index)
    if (optionSelected == null) {
      select(option)
      return
    }

    deselect(option)
  }

  const parentRef = useRef<HTMLDivElement>(null)
  useClickAway(parentRef, () => setExpanded(false))

  return (
    <div className="select" style={{ "--select-width": props.width }} ref={parentRef}>
      {props.label && (
        <div className="select__label">{props.label}</div>
      )}
      <button className={classWithModifiers("select__appearance", props.size, theme)} type="button" onClick={toggleState(setExpanded)}>
        {optionsSelected.length > 0 && (
          <div className={classWithModifiers("select-selected", "multiple")}>
            <div className="select-selected__options">
              {[...optionsSelected].map(option => (
                <div className="select-selected__option" key={option.index} onClick={event => (event.stopPropagation(), deselect(option))}>
                  <span>{option.title}</span>
                  <Icon name="cross-circle" />
                </div>
              ))}
            </div>
          </div>
        )}
        {optionsSelected.length === 0 && (
          <div className={classWithModifiers("select-selected", "empty", "multiple")}>
            {props.placeholder || SELECT_EMPTY_PLACEHOLDER}
          </div>
        )}
        <Icon className={classWithModifiers("select__icon", expanded && "up")} name="chevron-down" />
      </button>
      <DropDown
        size={props.size}
        upwards={props.upwards}
        defaultValue={props.defaultValue}

        selectionIndexes={optionsSelected.map(option => option.index)}
        expanded={expanded}
        onSelect={toggle}
      >
        {props.children}
      </DropDown>
      {props.name && [...optionsSelected].map(option => (
        <input type="hidden" name={props.name} value={option.value as never} key={option.index} />
      ))}
    </div>
  )
}

export default SelectMultiple
