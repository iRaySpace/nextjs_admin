import {
  Pane,
  Card,
  Heading,
  PeopleIcon,
  DocumentIcon,
  DollarIcon,
  Paragraph,
} from "evergreen-ui";
import { useRouter } from "next/router";
import { Nav, Header } from "../../components/";

export default function AdminManage() {
  const router = useRouter();
  return (
    <>
      <Nav current="Manage" />
      <Header title="Manage" subtitle="Manage your data" />
      <Pane width={960} marginX="auto" marginTop={25}>
        <Heading marginX={20} marginBottom={15}>
          Things you can do!
        </Heading>
        <Pane display="flex">
          <Card
            border
            width={300}
            height={180}
            marginX={20}
            paddingX={25}
            paddingY={20}
            elevation={1}
            cursor="pointer"
            onClick={() => router.push("/admin/member")}
          >
            <PeopleIcon size={48} color="muted" />
            <Heading size={700}>Member List</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Paragraph>
          </Card>
          <Card
            border
            width={300}
            height={180}
            marginX={20}
            paddingX={25}
            paddingY={20}
            elevation={1}
          >
            <DocumentIcon size={48} color="muted" />
            <Heading size={700}>Invoice List</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Paragraph>
          </Card>
          <Card
            border
            width={300}
            height={180}
            marginX={20}
            paddingX={25}
            paddingY={20}
            elevation={1}
          >
            <DollarIcon size={48} color="muted" />
            <Heading size={700}>Payment List</Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Paragraph>
          </Card>
        </Pane>
      </Pane>
    </>
  );
}
