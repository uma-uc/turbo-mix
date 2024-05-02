'use client';
import {Flex, Button, Text, Theme, Container} from "@radix-ui/themes";

function App() {
  return (
    <Theme>
      <Container>
        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :)</Text>
          <Button className="bg-red-500">Red Tailwind Button</Button>
          <Button  variant="ghost">Ghost</Button>
        </Flex>
      </Container>
    </Theme>
  );
}
export default App;