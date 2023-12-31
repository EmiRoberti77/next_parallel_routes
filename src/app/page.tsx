import { delay } from '@/lib/util';

export default async function Home() {
  await delay(1000);

  return (
    <div className="h-60 rounded-x1 bg-sky-800 p-10 text-white">
      <h1 className="text-3x1 font-bold">Parallel Routes</h1>
    </div>
  );
}
