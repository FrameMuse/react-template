import "app/assets/scss/modal.scss"

import { useModal } from "app/containers/Modal/hooks/useModal"
import Icon from "app/ui/Icon/Icon"
import { ReactNode, useEffect } from "react"
import ReactGA from "react-ga4"

interface ModalLayoutProps {
  title: string
  width?: string
  children: ReactNode
}

function ModalLayout(props: ModalLayoutProps) {
  const { close, component } = useModal()
  useEffect(() => ReactGA.send({
    hitType: "modalview",
    view: component.toString()
  }), [component])
  return (
    <div className="modal-layout" style={{ width: props.width }}>
      <button className="modal-layout__close" type="button" onClick={close}><Icon name="cross" /></button>
      <h3 className="modal-layout__title heading">{props.title}</h3>
      <div className="modal-layout__container">{props.children}</div>
    </div>
  )
}

export default ModalLayout
