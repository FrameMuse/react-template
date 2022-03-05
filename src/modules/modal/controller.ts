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

import { ModalContainerState } from "./container"
import { ModalComponent, ModalParams, ModalWindow } from "./interfaces"

type AnyIfEmpty<T extends object> = keyof T extends never ? any : T

const convertToBase64 = (data: any) => Buffer.from(JSON.stringify(data)).toString("base64")

export const ModalPrivate: {
  dispatch: Dispatch<SetStateAction<ModalContainerState>>
} = {
  dispatch: () => { throw new Error("ModalError: no containers were found") }
}

export class Modal {
  public static open<
    P extends object = {},
    AC extends Partial<ModalParams> & P = Partial<ModalParams> & P
  >(
    component: ModalComponent<P>,
    ...[params]: AnyIfEmpty<P> extends object ? [AC] : [AC?]
  ): Promise<void> {
    return new Promise<void>(function (resolve) {
      const ModalWindow = { component, params, close }
      Modal.addToQueue(ModalWindow)
      function close() {
        resolve()
        Modal.removeFromQueue(ModalWindow)
      }
    })
  }
  private static addToQueue(ModalWindow: ModalWindow<any>) {
    ModalPrivate.dispatch(state => {
      // Skip adding to queue if there is already the same window
      if (state.queue.length > 0) {
        const lastWindow = state.queue[state.queue.length - 1]
        if ((convertToBase64(lastWindow.params || {}) === convertToBase64(ModalWindow.params || {})) && lastWindow.component === ModalWindow.component) {
          return { ...state, isActive: true }
        }
      }
      // Set queue if Modal was inactive and has only one window
      // to be sure that window by the rule above won't appear again
      if (state.isActive === false && state.queue.length === 1) {
        return {
          isActive: true,
          queue: [ModalWindow]
        }
      }
      return {
        isActive: true,
        queue: [...state.queue, ModalWindow]
      }
    })
  }
  private static removeFromQueue(ModalWindow: ModalWindow<any>) {
    ModalPrivate.dispatch(state => {
      const queue = state.queue.filter(pw => pw !== ModalWindow)
      // Hide modal without removing if it's the last window
      if (queue.length === 0) {
        return { isActive: false, queue: [ModalWindow] }
      }
      return { ...state, queue }
    })
  }
  public static closeAll() {
    ModalPrivate.dispatch(state => {
      state.queue.forEach(Modal => Modal.close())
      return {
        isActive: false,
        queue: []
      }
    })
  }
}
