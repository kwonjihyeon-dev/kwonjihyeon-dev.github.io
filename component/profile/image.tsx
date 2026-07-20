import { PropsWithChildren } from 'react';

export default function ProfileImage({ src }: PropsWithChildren<{ src: string }>) {
  return (
    <div className="pb-3 text-md-right text-center">
      <img
        src={src}
        alt="Profile"
        style={{
          width: '180px',
          height: '180px',
          maxWidth: '100%',
          objectFit: 'cover',
          objectPosition: 'top',
          borderRadius: '50%',
        }}
      />
    </div>
  );
}
