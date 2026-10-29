import { mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const outputDirectory = resolve(
  'apps/itkd',
  process.env.NEXTJS_DIST_DIR || '.next',
);

await mkdir(outputDirectory, { recursive: true });
await writeFile(resolve(outputDirectory, 'package.json'), '{}\n');
await rm(resolve(outputDirectory, 'project.json'), { force: true });
await writeFile(resolve(outputDirectory, 'next.config.mjs'), 'export default {};\n');