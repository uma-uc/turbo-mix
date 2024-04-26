'use client';
import "@incmix/ui/styles/global.css"
import {Flex, Button, Text, Theme} from "@radix-ui/themes";

function App() {
  return (
    <Theme>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button className="bg-red-300">Red Tailwind Button</Button>
        <Button  variant="ghost">Ghost</Button>
      </Flex>
    </Theme>
  );
}
export default App;