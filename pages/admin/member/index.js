import { Pane, Heading, Table, Button } from "evergreen-ui";
import { useRouter } from "next/router";
import { Nav, Header } from "../../../components/";

export default function AdminMember() {
  const router = useRouter();
  return (
    <>
      <Nav current="Manage" />
      <Header title="Member List" subtitle="Check your members' profile" />
      <Pane width={960} marginX="auto" marginTop={25}>
        <Pane display="flex" marginX={20} marginBottom={15}>
          <Pane flex={1}>3 members</Pane>
          <Pane>
            <Button
              appearance="primary"
              onClick={() => router.push("/admin/member/add")}
            >
              Add Member
            </Button>
          </Pane>
        </Pane>
        <Pane>
          <Table marginX={20}>
            <Table.Head>
              <Table.SearchHeaderCell />
              <Table.TextHeaderCell>Balance</Table.TextHeaderCell>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.TextCell>Juan Der Lan</Table.TextCell>
                <Table.TextCell isNumber>1000.00</Table.TextCell>
              </Table.Row>
              <Table.Row>
                <Table.TextCell>Jose Rizal</Table.TextCell>
                <Table.TextCell isNumber>540.00</Table.TextCell>
              </Table.Row>
              <Table.Row>
                <Table.TextCell>Antonio Luna</Table.TextCell>
                <Table.TextCell isNumber>210.00</Table.TextCell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Pane>
      </Pane>
    </>
  );
}
