import Head from 'next/head';
import { useTheme } from 'next-themes';

// https://stackoverflow.com/questions/260857/changing-website-favicon-dynamically
export function Favicon() {
  const { systemTheme } = useTheme();

  return (
    <Head>
      <link rel="icon" href="/favicon.png" />
      {systemTheme === 'dark' ? (
        <link rel="icon" href="/favicon-white.svg" />
      ) : (
        <link rel="icon" href="/favicon-black.svg" />
      )}
    </Head>
  );
}