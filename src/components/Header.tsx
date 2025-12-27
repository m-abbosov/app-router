import Link from 'next/link';

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between">
      <h2>Logo</h2>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/news">News</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/orders">Orders</Link>
      </nav>
    </header>
  );
};

export default Header;
