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

import { Dispatch, SetStateAction } from "react"
import { AnyIfEmpty } from "react-redux"
import { toBase64 } from "utils/common"

import { ModalContainerState } from "./container"
import { ModalComponent, ModalParams, ModalWindow } from "./types"

export const modalPrivate: {
  dispatch: Dispatch<SetStateAction<ModalContainerState>>
} = {
  dispatch: () => { throw new Error("ModalError: no containers were found") }
}

export class Modal {
  public static open<
    P extends object = {},
    AC extends Partial<ModalParams> & P = Partial<ModalParams> & P
  >(
    component: ModalComponent<unknown>,
    ...[params]: AnyIfEmpty<P> extends object ? [AC] : [AC?]
  ): Promise<void> {
    return new Promise<void>(function (resolve) {
      const ModalWindow: ModalWindow = { component, params, close }
      Modal.add(ModalWindow)
      function close() {
        resolve()
        Modal.remove(ModalWindow)
      }
    })
  }
  private static add(modalWindow: ModalWindow) {
    modalPrivate.dispatch(state => {
      // Skip adding to queue if there is already the same window
      if (state.queue.length > 0) {
        const lastWindow = state.queue[state.queue.length - 1]
        if ((toBase64(lastWindow.params) === toBase64(modalWindow.params)) && lastWindow.component === modalWindow.component) {
          return { ...state, isActive: true }
        }
      }
      // Set queue if Modal was inactive and has only one window
      // to be sure that window by the rule above won't appear again
      if (state.isActive === false && state.queue.length === 1) {
        return {
          isActive: true,
          queue: [modalWindow]
        }
      }
      return {
        isActive: true,
        queue: [...state.queue, modalWindow]
      }
    })
  }
  private static remove(modalWindow: ModalWindow) {
    modalPrivate.dispatch(state => {
      const queue = state.queue.filter(pw => pw !== modalWindow)
      // Hide modal without removing if it's the last window
      if (queue.length === 0) {
        return { isActive: false, queue: [modalWindow] }
      }
      return { ...state, queue }
    })
  }
  public static closeAll() {
    modalPrivate.dispatch(state => {
      state.queue.forEach(modal => modal.close())
      return {
        isActive: false,
        queue: []
      }
    })
  }
}
