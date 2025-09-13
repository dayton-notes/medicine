import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"

export default (() => {
  const Footer: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          This is a repository for my personal PA school clinical year notes.</p>
          <p>The use of these notes is not a substitute for clinical judgment and is intended as an educational guide.</p>
          <p>Content reflects current national guidelines, as well as documented variations in practice and clinical wisdom.</p>
          <p>These notes are not intended to replace more comprehensive references or guides.
        </p>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
