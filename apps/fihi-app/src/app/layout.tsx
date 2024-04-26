'use client';
import "@incmix/ui/styles/global.css"
import {Flex, Button, Text, Theme} from "@incmix/ui";

function App() {
  return (
    <Theme>
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button className="bg-red-300">Red Tailwind Button</Button>
        <Button label="Ghost" variant="ghost"></Button>
      </Flex>
    </Theme>
  );
}
export default App;