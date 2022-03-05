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

import { ReactNode } from "react"

export type PopupComponent<P> = (props: P) => JSX.Element

export interface PopupParams {
  id: string | number
  title: ReactNode
  desc: ReactNode
  closable: boolean
}

export interface PopupWindow<P = {}> {
  component: PopupComponent<Partial<PopupParams> & P>
  params?: Partial<PopupParams> & P
  close: () => void
}
