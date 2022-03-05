/*

MIT License

Copyright (c) 2022 Valery Zinchenko

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

*/

import { Component } from "react"
import { classWithModifiers } from "utils/common"

import { modalContext } from "./context"
import { ModalPrivate } from "./controller"
import { ModalWindow } from "./interfaces"

export interface ModalContainerProps {
  className?: string
}
export interface ModalContainerState {
  isActive: boolean
  queue: ModalWindow[]
}

export class ModalContainer extends Component<ModalContainerProps, ModalContainerState> {
  state: ModalContainerState = {
    isActive: false,
    queue: []
  }

  constructor(props: any) {
    super(props)
    // Set Modal dispatcher
    ModalPrivate.dispatch = this.setState.bind(this)
  }

  render() {
    const { isActive, queue } = this.state
    const lastModal = queue[queue.length - 1] as ModalWindow<{}> | undefined
    const { component: ModalWindowComponent, params = {}, close } = lastModal || {}

    const className = this.props.className || "modal"
    return (
      <div className={classWithModifiers(className, isActive && "active")}>
        <div className={className + "__container"} onClick={close}>
          <div className={className + "__inner"} onClick={event => event.stopPropagation()}>
            <modalContext.Provider value={lastModal || null}>
              {ModalWindowComponent && <ModalWindowComponent {...params} />}
            </modalContext.Provider>
          </div>
        </div>
      </div>
    )
  }
}
