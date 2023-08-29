import { Title } from "solid-start";
import { css } from "~/styled-system/css";

export default function Home() {
  return (
    <main>
      <Title>Hello 🐼!</Title>

      <section>
        <div class={css({ fontSize: "2xl", fontWeight: "bold" })}>
          Hello 🐼!
        </div>
      </section>
    </main>
  );
}
