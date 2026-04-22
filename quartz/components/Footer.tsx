import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

export default (() => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>leave a <a href="https://daytonem.cc/medicine/00-Admin/Comments">comment</a> here! enjoy :)
        </p>
        <p>updated sometime in {year}</p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
