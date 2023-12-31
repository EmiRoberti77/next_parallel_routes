import { delay } from '@/lib/util';

export default async function Settings() {
  await delay(3000);
  return (
    <div className="h-96 flex-1 rounded-2xl bg-purple-800 p-10 text-white">
      <h1 className="text-3x1 font-bold">Settings Panel</h1>
    </div>
  );
}
