import { appWindow } from "@tauri-apps/api/window";
import type { Component } from "solid-js";
import { css } from "~/styled-system/css";

export type WindowControllerProps = {
  title: string;
};

const iconButtonStyle = () =>
  css({
    height: "10",
    padding: "2",
  });

export const WindowController: Component<WindowControllerProps> = ({
  title,
}) => {
  return (
    <section
      data-tauri-drag-region
      class={css({
        display: "flex",
        justifyContent: "space-between",
        height: "12",
        width: "full",
        background: "gray.200",
        paddingX: "4",
      })}
    >
      <div class={css({ display: "flex", alignItems: "center", gap: "2" })}>
        {title}
      </div>
      <div class={css({ display: "flex", alignItems: "center", gap: "2" })}>
        <button class={iconButtonStyle()} onClick={() => appWindow.minimize()}>
          ㅡ
        </button>
        <button
          class={iconButtonStyle()}
          onClick={() => appWindow.toggleMaximize()}
        >
          □
        </button>
        <button class={iconButtonStyle()} onClick={() => appWindow.close()}>
          X
        </button>
      </div>
    </section>
  );
};
