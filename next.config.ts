import type { NextConfig } from 'next';
import path from 'path';

// Fix: Turbopack incorrectly picks up /Users/ahmed/Documents/package-lock.json
// and sets the workspace root to /Users/ahmed/Documents/, which breaks Tailwind v4's
// @source path resolution. Force the root to this project directory.
const nextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
} as NextConfig;

export default nextConfig;
