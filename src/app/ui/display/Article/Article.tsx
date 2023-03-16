import "./Article.scss"

import { ReactNode } from "react"
import useTheme from "shared/theme/useTheme"
import { classMerge, classWithModifiers } from "utils/common"

interface ArticleProps {
  className?: string
  fontSize?: "small"
  children: ReactNode
}

function Article(props: ArticleProps) {
  const theme = useTheme()

  return (
    <article className={classMerge(classWithModifiers("article", props.fontSize, theme), props.className)}>{props.children}</article>
  )
}

export default Article
