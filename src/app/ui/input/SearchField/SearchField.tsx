import "./SearchField.scss"

import Icon from "app/ui/common/Icon/Icon"
import { inputValue } from "utils/common"

interface SearchFieldProps {
  value?: string
  /**
   * Also defines if cleanable.
   */
  onClean?(): void
  onChange?(value: string): void
}

/**
 * Search input is to be externally controlled.
 */
function SearchField(props: SearchFieldProps) {
  return (
    <label className="search-field">
      <Icon className="search-field__icon" name="loupe" />
      <input
        className="search-field__input"
        type="text"
        placeholder="Search by channels etc..."

        value={props.value}
        onChange={props.onChange && inputValue(props.onChange)}
      />
      {props.onClean && (
        <button className="search-field__clear" type="button" onClick={props.onClean}>
          <Icon name="cross-circle" />
        </button>
      )}
    </label>
  )
}

export default SearchField
