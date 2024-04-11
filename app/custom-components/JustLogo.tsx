import Image from 'next/image';

export default function JustLogo() {
  return (
    <div className="bg-blue-600 rounded-full p-1">
      <Image
        src={'/rakita-logo-white.png'}
        alt="Studio Rakita Livestream"
        title="Studio Rakita Livestream"
        height={32}
        width="32"
      />
    </div>
  );
}
