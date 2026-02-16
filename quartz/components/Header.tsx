import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Header: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return children.length > 0 ? <header>{children}</header> : null
}

Header.css = `
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2rem 0;
  gap: 1.5rem;
  flex-wrap: nowrap;
}

header h1 {
  margin: 0;
  flex: auto;
  font-size: clamp(1.25rem, 6vw, 2rem); /* scales font between min/max depending on viewport */
  white-space: nowrap; /* prevent the title from wrapping */
}
`

export default (() => Header) satisfies QuartzComponentConstructor
