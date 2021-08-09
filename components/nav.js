import { Pane, Button } from "evergreen-ui";
import { useRouter } from "next/router";

export default function Nav({ current }) {
  const router = useRouter();
  return (
    <Pane
      borderBottom
      height={64}
      paddingX={40}
      display="flex"
      alignItems="center"
    >
      <Pane color="gray" width={236}>
        Next.js Admin
      </Pane>
      <Pane>
        <Button
          marginRight={15}
          appearance={current === "Manage" ? "primary" : "minimal"}
          onClick={() => current !== "Manage" && router.push("/admin/manage")}
        >
          Manage
        </Button>
      </Pane>
    </Pane>
  );
}
