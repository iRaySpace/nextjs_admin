import Head from "next/head";
import { useRouter } from "next/router";
import { Pane, Card, TextInputField, Button } from "evergreen-ui";

export default function AdminIndex() {
  const router = useRouter();
  function handleLogin(e) {
    router.push("admin/manage");
  }
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to the systems" />
      </Head>
      <Pane
        minHeight="100vh"
        background="linear-gradient(90deg, rgba(0,147,233,1) 0%, rgba(128,208,199,1) 100%)"
        paddingTop={50}
      >
        <Card width={390} background="white" marginX="auto">
          <Pane
            padding={15}
            borderBottom="1px solid"
            borderBottomColor="#c1c4d6"
            color="gray"
          >
            Login
          </Pane>
          <Pane padding={15}>
            <TextInputField
              required
              id="ids-are-optional"
              label="Email"
              placeholder="admin@test.com"
            />
            <TextInputField
              required
              id="ids-are-optional"
              label="Password"
              type="password"
            />
            <Button appearance="primary" onClick={handleLogin}>
              Login
            </Button>
          </Pane>
        </Card>
      </Pane>
    </>
  );
}
