import { Pane, Button, TextInputField } from "evergreen-ui";
import { Nav, Header } from "../../../components/";

export default function AdminMemberAdd() {
  return (
    <>
      <Nav current="Manage" />
      <Header title="Add new member" subtitle="Please input the fields" />
      <Pane width={960} marginX="auto" marginTop={25}>
        <Pane display="flex" marginX={20} marginBottom={15}>
          <Pane flex={1}>New member</Pane>
          <Pane>
            <Button appearance="primary">Save</Button>
          </Pane>
        </Pane>
        <Pane marginX={20}>
          <TextInputField
            required
            id="ids-are-optional"
            label="First name"
            placeholder="Juan"
          />
          <TextInputField
            required
            id="ids-are-optional"
            label="Last name"
            placeholder="De Luna"
          />
          <TextInputField
            required
            id="ids-are-optional"
            label="Contact No"
            placeholder="09123456789"
          />
          <TextInputField
            required
            id="ids-are-optional"
            label="Email"
            placeholder="09123456789"
          />
        </Pane>
      </Pane>
    </>
  );
}
