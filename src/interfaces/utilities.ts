export type URLType = `${"http" | "https"}://${string}`


export type URLData = `data:${string};${string}`
export type URLDataBase64 = `data:${string};base64,${string}`


export type ValuesOf<T> = T[keyof T]


export type FormElements<U extends string> = HTMLFormControlsCollection & Record<U, HTMLInputElement>


export type ExtractInterpolations<T extends string> = T extends `${infer _Start}{${infer V}}${infer Rest}` ? V | ExtractInterpolations<Rest> : never
