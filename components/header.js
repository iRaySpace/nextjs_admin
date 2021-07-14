import { Pane, Heading } from "evergreen-ui";

export default function Header({ title, subtitle }) {
  return (
    <Pane height={210} background="blue500" display="flex" alignItems="center">
      <Pane width={960} marginX="auto" paddingY={25}>
        <Heading size={900} color="white" marginX={20}>
          {title}
        </Heading>
        <Heading color="white" marginX={20}>
          {subtitle}
        </Heading>
      </Pane>
    </Pane>
  );
}
